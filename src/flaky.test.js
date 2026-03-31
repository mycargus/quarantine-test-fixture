/**
 * Deliberately flaky tests for quarantine dogfooding.
 *
 * These tests fail a percentage of the time on purpose. Quarantine should:
 * 1. Detect them as flaky on the initial run (fail, then pass on retry)
 * 2. Create a GitHub Issue for each flaky test
 * 3. Quarantine them so subsequent runs exclude them from the build result
 *
 * Do NOT fix these tests — they exist to exercise quarantine's flaky detection.
 */

describe("PaymentService", () => {
  test("should handle charge timeout", () => {
    // Fails ~50% of the time
    expect(Math.random()).toBeGreaterThan(0.5)
  })

  test("should process refund", () => {
    // Fails ~50% of the time
    expect(Math.random()).toBeGreaterThan(0.5)
  })

  test("should validate currency", () => {
    // Fails ~40% of the time
    expect(Math.random()).toBeGreaterThan(0.4)
  })
})

describe("AuthService", () => {
  test("should validate expired token", () => {
    // Fails ~50% of the time
    expect(Math.random()).toBeGreaterThan(0.5)
  })

  test("should refresh session", () => {
    // Fails ~40% of the time
    expect(Math.random()).toBeGreaterThan(0.4)
  })
})

describe("CacheService", () => {
  test("should handle eviction under load", () => {
    // Fails ~50% of the time
    expect(Math.random()).toBeGreaterThan(0.5)
  })
})
