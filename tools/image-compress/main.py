"""
画像圧縮ツール
bg.pngの解像度を基準に、raw/ディレクトリ内の画像をリサイズしてoutput/に保存
"""

import os
from pathlib import Path
from PIL import Image


def get_target_width(bg_image_path: str) -> int:
    """
    bg.pngから目標横幅を取得

    Args:
        bg_image_path: 基準となる画像のパス

    Returns:
        横幅（width）
    """
    if not os.path.exists(bg_image_path):
        raise FileNotFoundError(f"Background image not found: {bg_image_path}")

    with Image.open(bg_image_path) as img:
        return img.size[0]


def compress_images(
    raw_dir: str,
    output_dir: str,
    target_width: int,
    quality: int = 100,
    convert_to_jpeg: bool = True,
) -> None:
    """
    raw/ディレクトリ内の画像を目標横幅にリサイズしてoutput/に保存
    縦横比は保持され、より積極的な圧縮が行われる

    Args:
        raw_dir: 元画像のディレクトリ
        output_dir: 出力先ディレクトリ
        target_width: 目標横幅
        quality: JPEG品質 (1-100)
        convert_to_jpeg: PNGをJPEGに変換するか
    """
    raw_path = Path(raw_dir)
    output_path = Path(output_dir)

    if not raw_path.exists():
        raise FileNotFoundError(f"Raw directory not found: {raw_dir}")

    output_path.mkdir(parents=True, exist_ok=True)

    image_extensions = {".png", ".jpg", ".jpeg", ".webp", ".bmp"}
    image_files = [
        f for f in raw_path.iterdir() if f.suffix.lower() in image_extensions
    ]

    if not image_files:
        print(f"No images found in {raw_dir}")
        return

    print(f"Target width: {target_width}px")
    print(f"JPEG quality: {quality}")
    print(f"Convert PNG to JPEG: {convert_to_jpeg}")
    print(f"Found {len(image_files)} image(s) to process")

    for image_file in image_files:
        try:
            with Image.open(image_file) as img:
                original_size = img.size
                original_width, original_height = original_size

                aspect_ratio = original_height / original_width
                new_height = int(target_width * aspect_ratio)
                new_size = (target_width, new_height)

                if img.mode in ("RGBA", "LA", "P"):
                    img = img.convert("RGB")

                resized_img = img.resize(new_size, Image.Resampling.LANCZOS)

                if convert_to_jpeg and image_file.suffix.lower() == ".png":
                    output_file = output_path / f"{image_file.stem}.jpg"
                    resized_img.save(
                        output_file, "JPEG", quality=quality, optimize=True
                    )
                elif image_file.suffix.lower() in {".jpg", ".jpeg"}:
                    output_file = output_path / image_file.name
                    resized_img.save(
                        output_file, "JPEG", quality=quality, optimize=True
                    )
                else:
                    output_file = output_path / image_file.name
                    resized_img.save(output_file, optimize=True)

                output_size = output_file.stat().st_size / (1024 * 1024)
                print(
                    f"✓ {image_file.name}: {original_size[0]}x{original_size[1]} → {new_size[0]}x{new_size[1]} ({output_size:.2f}MB)"
                )

        except Exception as e:
            print(f"✗ Error processing {image_file.name}: {e}")


def main():
    """メイン処理"""
    bg_image = "bg.png"
    raw_dir = "raw"
    output_dir = "output"

    try:
        target_width = get_target_width(bg_image)
        compress_images(raw_dir, output_dir, target_width)
        print("\nCompression completed!")

    except Exception as e:
        print(f"Error: {e}")
        exit(1)


if __name__ == "__main__":
    main()
