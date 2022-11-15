import styled from "styled-components";
import { Dimensions, getRows } from "./utils";

type BoxProps = { height: number; width: number };
type FloorProps = { rows: number } & BoxProps;
type BoardProps = { dark: boolean } & BoxProps;

const FloorContainer = styled.div<FloorProps>`
  margin: 1rem;
  height: ${(props) => props.height * 2 + props.rows}px;
  width: ${(props) => props.width * 2}px;
  border: solid 1px gray;
`;

const Row = styled.div`
  display: flex;
`;

const Board = styled.div<BoardProps>`
  height: ${(props) => props.height * 2}px;
  width: ${(props) => props.width * 2}px;
  background-color: ${(props) => (props.dark ? "burlywood" : "beige")};
  border: dashed 1px black;
  border-width: 0 1px 1px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

function Floor(props: Dimensions) {
  const { roomLength, roomWidth, plankLength, plankWidth } = props;
  const rows = getRows({ roomLength, roomWidth, plankLength, plankWidth });

  return (
    <FloorContainer height={roomWidth} width={roomLength} rows={rows.length}>
      {rows.map((row, rowIdx) => (
        <Row key={`${JSON.stringify(props)}-row${rowIdx}`}>
          {row.lengths.map((length, i) => (
            <Board
              key={`${i}:${length}`}
              height={row.width}
              width={length}
              dark={length < plankLength}
            >
              {row.width !== plankWidth ? `${length}x${row.width}` : length}
            </Board>
          ))}
        </Row>
      ))}
    </FloorContainer>
  );
}

export default Floor;
