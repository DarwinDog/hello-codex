import { describe, expect, it } from 'vitest'
import { getGreeting } from '../src/greeting'

describe('getGreeting', () => {
  it('returns the expected greeting', () => {
    expect(getGreeting()).toBe('Hello, World!')
  })
})
