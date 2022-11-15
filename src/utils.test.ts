import { getRows } from "./utils";

describe("getRows", () => {
  test("should generate rows based on room and plank dimensions", () => {
    const rows = getRows({
      roomWidth: 3000,
      roomLength: 3060,
      plankWidth: 150,
      plankLength: 1400,
    });
    const numberOfRows = rows.length;
    expect(numberOfRows).toEqual(20);
  });

  test("should add an extra row width the remaining width if necessary", () => {
    const plankWidth = 240;
    const rows = getRows({
      roomWidth: 2990,
      roomLength: 3060,
      plankWidth,
      plankLength: 2050,
    });
    const numberOfRows = rows.length;
    expect(numberOfRows).toEqual(13);
    expect(rows[numberOfRows - 1].width).toEqual(110);
  });
});
