export type Dimensions = {
  roomWidth: number;
  roomLength: number;
  plankWidth: number;
  plankLength: number;
};

export function getRows({
  roomWidth,
  roomLength,
  plankWidth,
  plankLength,
}: Dimensions): number[][] {
  const numberOfRows = roomWidth / plankWidth;
  const numberOfFullRows = Math.floor(numberOfRows);
  const rows: number[][] = [];
  let remainder = 0;

  for (let i = 0; i < numberOfFullRows; i++) {
    const row: number[] = [];
    let rowLength = 0;
    while (rowLength < roomLength) {
      let pieceLength = 0;
      if (remainder) {
        pieceLength = remainder;
        remainder = 0;
      } else if (rowLength + plankLength > roomLength) {
        pieceLength = roomLength - rowLength;
        remainder = plankLength - pieceLength;
      } else {
        pieceLength = plankLength;
      }
      row.push(pieceLength);
      rowLength += pieceLength;
    }
    rows.push(row);
  }
  return rows;
}
