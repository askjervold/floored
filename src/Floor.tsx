import styled from "styled-components";
import { Dimensions, getRows } from "./utils";

type BoxProps = { height: number; width: number };
type BoardProps = { dark: boolean } & BoxProps;

const FloorContainer = styled.div<BoxProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border: solid 1px gray;
`;

const Row = styled.div`
  display: flex;
`;

const Board = styled.div<BoardProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: ${(props) => (props.dark ? "burlywood" : "beige")};
  border: dashed 1px black;
  border-width: 0 1px 1px 0;
`;

function Floor(props: Dimensions) {
  const { roomLength, roomWidth, plankLength, plankWidth } = props;
  const rows = getRows({ roomLength, roomWidth, plankLength, plankWidth });

  return (
    <FloorContainer height={roomWidth} width={roomLength}>
      {rows.map((row, rowIdx) => (
        <Row key={`${JSON.stringify(props)}-row${rowIdx}`}>
          {row.map((length, i) => (
            <Board
              key={`${i}:${length}`}
              height={plankWidth}
              width={length}
              dark={i % 2 === 1}
            />
          ))}
        </Row>
      ))}
    </FloorContainer>
  );
}

export default Floor;
