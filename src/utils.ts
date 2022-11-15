export type FlooringDetails = {
  plankWidth: number;
  plankLength: number;
};

export type Dimensions = {
  roomWidth: number;
  roomLength: number;
} & FlooringDetails;

type Row = {
  lengths: number[];
  width: number;
};

const MINIMUM_PIECE_LENGTH = 30;
const MINIMUM_BOARD_WIDTH = 10;

function divideFloats(numerator: number, divisor: number) {
  return (numerator * 100) / (divisor * 100);
}

function floatToFixed(float: number, decimals: number = 1) {
  return parseFloat(float.toFixed(decimals));
}

export function getRows({
  roomWidth,
  roomLength,
  plankWidth,
  plankLength,
}: Dimensions): Row[] {
  const rowsNeeded = divideFloats(roomWidth, plankWidth);
  const fullWidthRows = Math.floor(rowsNeeded);
  const totalRows = Math.ceil(rowsNeeded);

  const rows: Row[] = [];
  let cutoff = 0;
  for (let i = 0; i < totalRows; i++) {
    const row: number[] = [];
    let rowLength = 0;
    while (rowLength < roomLength) {
      let pieceLength = 0;
      if (cutoff && cutoff >= MINIMUM_PIECE_LENGTH) {
        pieceLength = cutoff;
        cutoff = 0;
      } else if (rowLength + plankLength > roomLength) {
        pieceLength = roomLength - rowLength;
        cutoff = plankLength - pieceLength;
      } else {
        pieceLength = plankLength;
      }
      row.push(pieceLength);
      rowLength += pieceLength;
    }
    rows.push({ lengths: row, width: plankWidth });
  }

  const leftoverWidth = (rowsNeeded - fullWidthRows) * plankWidth;
  if (leftoverWidth) {
    const splitFirstRowBoards =
      leftoverWidth < MINIMUM_BOARD_WIDTH &&
      leftoverWidth < divideFloats(plankWidth, 2);

    if (splitFirstRowBoards) {
      const splitWidth = plankWidth + leftoverWidth;
      const firstRowWidth = Math.ceil(splitWidth / 2);
      rows[0].width = firstRowWidth;
      rows[rows.length - 1].width = floatToFixed(splitWidth - firstRowWidth);
    } else {
      rows[rows.length - 1].width = floatToFixed(leftoverWidth);
    }
  }

  return rows;
}
