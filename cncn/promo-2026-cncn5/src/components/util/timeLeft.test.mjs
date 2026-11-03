import assert from 'node:assert/strict'
import test from 'node:test'

import { calculateTimeLeft } from './timeLeft.mjs'

const target = new Date('2026-12-01T00:00:00+09:00')

test('残り時間を日・時・分・秒に分解する', () => {
  const now = new Date('2026-11-29T22:58:57+09:00')

  assert.deepEqual(calculateTimeLeft(target, now), {
    days: 1,
    hours: 1,
    minutes: 1,
    seconds: 3,
  })
})

test('目標時刻ちょうどはすべて0になる', () => {
  assert.deepEqual(calculateTimeLeft(target, target), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
})

test('目標時刻を過ぎても負の値にならない', () => {
  const now = new Date('2026-12-02T00:00:00+09:00')

  assert.deepEqual(calculateTimeLeft(target, now), {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
})
