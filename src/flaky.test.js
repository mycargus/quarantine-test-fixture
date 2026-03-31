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
    // Fails ~30% of the time
    expect(Math.random()).toBeGreaterThan(0.3)
  })

  test("should process refund", () => {
    // Fails ~20% of the time
    expect(Math.random()).toBeGreaterThan(0.2)
  })
})

describe("AuthService", () => {
  test("should validate expired token", () => {
    // Fails ~25% of the time
    expect(Math.random()).toBeGreaterThan(0.25)
  })
})
