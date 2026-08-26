import { describe, expect, it } from 'vitest'
import { minus } from './minus.js'

describe('minus', () => {
  it('вычитает положительные числа', () => {
    expect(minus(5, 3)).toBe(2)
  })

  it('вычитает отрицательные числа', () => {
    expect(minus(-5, -3)).toBe(-2)
  })

  it('вычитает ноль', () => {
    expect(minus(7, 0)).toBe(7)
  })

  it('вычитает дробные числа', () => {
    expect(minus(0.5, 0.2)).toBeCloseTo(0.3)
  })
})