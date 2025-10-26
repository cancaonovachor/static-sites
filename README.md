# static-sites

## 概要

このリポジトリはCNCNの静的サイトをFirebase Hostingにデプロイするためのプロジェクトです。

GitHub ActionsとFirebase CLIを使用して、変更があったサイトのみを自動的にデプロイします。

## ディレクトリ構成

```
.
├── .github/
│   └── workflows/
│       ├── deploy-firebase.yml    # 本番環境への自動デプロイ（mainブランチ）
│       └── preview-firebase.yml   # Preview環境への自動デプロイ（PR）
└── cncn/                          # CNCN関連のサイト
    ├── promo-2025-cncn4/          # CNCN 4.0 プロモーションサイト（Gatsby）
    └── firebase.json              # Firebase Hosting設定
```

## 初回セットアップ（手動）

以下の手順は**プロジェクト全体で1回だけ**実行します。

### 前提条件

- Node.js >= 18
- Firebase CLI (`npm install -g firebase-tools`)
- GCPプロジェクト

### 1. Firebaseプロジェクトの作成

```bash
# Firebase CLIでログイン
firebase login

# Firebaseプロジェクトを作成（または既存のGCPプロジェクトと連携）
firebase projects:create cn-static
```

または、Firebaseコンソール (https://console.firebase.google.com/) からプロジェクトを追加してください。

### 2. GitHub Secretsの設定

GitHub Actionsで自動デプロイするために、Firebase Service Accountを設定します。

```bash
# GCPでService Accountを作成してJSONキーをダウンロード
# または、以下のコマンドでFirebase CI tokenを生成（非推奨だがより簡単）
firebase login:ci
```

**推奨方法（Service Account）**:
1. GCPコンソール > IAM > サービスアカウント
2. サービスアカウントを作成
3. ロール: `Firebase Admin` と `API Keys Admin`
4. JSONキーを生成してダウンロード

**GitHub Secretsに登録**:

リポジトリの `Settings > Secrets and variables > Actions` で以下を設定:
- Name: `FIREBASE_SERVICE_ACCOUNT`
- Value: ダウンロードしたJSONファイルの内容全体をコピー&ペースト

---

## 新しいサイトの追加（各サイトごと）

新しいサイトを追加する場合、以下の手順を実行します。

### 1. サイトディレクトリの作成

```bash
cd cncn
mkdir new-site
cd new-site
# ここでGatsbyやNext.jsなどのプロジェクトを初期化
```

### 2. Firebase Hosting Siteの作成

```bash
firebase hosting:sites:create new-site --project cn-static
```

### 3. firebase.jsonの更新

`cncn/firebase.json` に新しいサイトを追加:

```json
{
  "hosting": [
    {
      "site": "promo-2025-cncn4",
      "public": "promo-2025-cncn4/public",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
    },
    {
      "site": "new-site",
      "public": "new-site/public",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
    }
  ]
}
```

### 4. GitHub Actionsワークフローの更新

**本番デプロイ用**: `.github/workflows/deploy-firebase.yml` のfiltersセクションに追加:

```yaml
- uses: dorny/paths-filter@v3
  id: filter
  with:
    filters: |
      promo-2025-cncn4:
        - 'cncn/promo-2025-cncn4/**'
      new-site:
        - 'cncn/new-site/**'
```

**Preview デプロイ用**: `.github/workflows/preview-firebase.yml` にも同様に追加:

```yaml
- uses: dorny/paths-filter@v3
  id: filter
  with:
    filters: |
      promo-2025-cncn4:
        - 'cncn/promo-2025-cncn4/**'
      new-site:
        - 'cncn/new-site/**'
```

### 5. 初回デプロイ（手動）

```bash
cd cncn/new-site
pnpm install
pnpm run build

cd ..
firebase deploy --only hosting:new-site --project cn-static
```

---

## 2回目以降（自動デプロイ）

初回セットアップ完了後は、**mainブランチにpushするだけ**で自動デプロイされます。

```bash
git add .
git commit -m "Update site"
git push origin main
```

変更があったサイトのみが自動的に検出され、ビルド&デプロイされます。

### ワークフローの仕組み

- **変更検出**: `dorny/paths-filter@v3` を使用してディレクトリごとの変更を検出
- **並列デプロイ**: 複数サイトに変更がある場合はMatrix Strategyで並列デプロイ
- **手動実行**: GitHub ActionsのUIから手動でワークフローを実行可能

---

## Pull RequestでのPreview Deploy

PRを作成すると、変更があったサイトのpreview環境が自動的にデプロイされます。

### Preview Deployの特徴

- **自動生成**: PRごとに一時的なpreview URLが生成される
- **変更検出**: 変更があったサイトのみpreviewを作成
- **PR内でレビュー**: PRのコメントにpreview URLが自動投稿される
- **自動クリーンアップ**: PRがマージまたはクローズされると、preview環境は自動削除

### 使い方

1. ブランチを作成して変更をpush
2. Pull Requestを作成
3. GitHub Actionsが自動的にpreviewをデプロイ
4. PRコメントに投稿されたpreview URLで確認

### Preview URLの形式

```
https://cn-static--pr-123-<site-id>-<hash>.web.app
```

例: `https://cn-static--pr-42-promo-2025-cncn4-abc123.web.app`

### セキュリティ

- 同じリポジトリからのPRのみpreview deployを実行（forkからのPRは実行されない）
- これによりsecretの漏洩を防止

## ライセンス

Private