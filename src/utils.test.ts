import { getRows } from "./utils";

describe("getRows", () => {
  test("should generate rows based on room and plank dimensions", () => {
    const rows = getRows({
      roomWidth: 2990,
      roomLength: 3060,
      plankWidth: 240,
      plankLength: 2050,
    });
    expect(rows.length).toEqual(12);
  });
});
