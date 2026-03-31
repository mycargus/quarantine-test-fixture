/**
 * Stable tests that always pass. These provide a baseline to verify that
 * quarantine correctly distinguishes flaky tests from reliable ones.
 */

describe("DatabaseService", () => {
  test("should connect successfully", () => {
    expect(true).toBe(true)
  })

  test("should execute query", () => {
    expect(1 + 1).toBe(2)
  })
})
