/**
 * Skipped test to verify quarantine correctly reports skipped tests
 * in the summary without treating them as failures or flaky.
 */

describe("MigrationService", () => {
  test.skip("should migrate v2 schema (not yet implemented)", () => {
    expect(true).toBe(true)
  })
})
