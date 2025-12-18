import { getClueReleaseDate } from "../../components/utils";

describe("getClueReleaseDate", () => {
  it("should calculate release date correctly for day 0 (start date)", () => {
    const startDate = "2024-12-01";
    const releaseDate = getClueReleaseDate(startDate, 0);

    expect(releaseDate.toDateString()).toBe("Sun Dec 01 2024");
  });

  it("should calculate release date correctly for positive day offsets", () => {
    const startDate = "2024-12-01";

    // Test day 1
    const releaseDate1 = getClueReleaseDate(startDate, 1);
    expect(releaseDate1.toDateString()).toBe("Mon Dec 02 2024");

    // Test day 23 (Christmas Eve)
    const releaseDate23 = getClueReleaseDate(startDate, 23);
    expect(releaseDate23.toDateString()).toBe("Tue Dec 24 2024");
  });

  it("should handle month boundaries correctly", () => {
    // Start in November, cross into December
    const startDate = "2024-11-25";
    const releaseDate = getClueReleaseDate(startDate, 10);

    expect(releaseDate.toDateString()).toBe("Thu Dec 05 2024");
  });

  it("should handle year boundaries correctly", () => {
    // Start in December, cross into next year
    const startDate = "2024-12-25";
    const releaseDate = getClueReleaseDate(startDate, 10);

    expect(releaseDate.toDateString()).toBe("Sat Jan 04 2025");
  });

  it("should work with different start dates", () => {
    // Test with a mid-year start date
    const startDate = "2024-06-15";
    const releaseDate = getClueReleaseDate(startDate, 5);

    expect(releaseDate.toDateString()).toBe("Thu Jun 20 2024");
  });

  it("should handle leap year correctly", () => {
    // Test February 29th in a leap year
    const startDate = "2024-02-27";
    const releaseDate = getClueReleaseDate(startDate, 2);

    expect(releaseDate.toDateString()).toBe("Thu Feb 29 2024");
  });

  it("should work with ISO date string formats", () => {
    const startDate = "2024-01-01T00:00:00.000Z";
    const releaseDate = getClueReleaseDate(startDate, 0);

    // Note: Date parsing from ISO string may be affected by timezone
    expect(releaseDate.getFullYear()).toBe(2024);
    expect(releaseDate.getMonth()).toBe(0); // January is month 0
  });
});
