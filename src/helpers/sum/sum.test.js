import { describe, expect, it } from 'vitest'
import { sum } from './sum.js'

describe('sum', () => {
  it('складывает положительные числа', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('складывает отрицательные числа', () => {
    expect(sum(-2, -3)).toBe(-5)
  })

  it('складывает число и ноль', () => {
    expect(sum(7, 0)).toBe(7)
  })

  it('складывает дробные числа', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})