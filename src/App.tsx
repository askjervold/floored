import { Dispatch, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Floor from "./Floor";
import { FlooringDetails } from "./utils";

const SectionHeading = styled.h2`
  text-align: left;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

function App() {
  const [roomLength, setRoomLength] = useState<number>(3060);
  const [roomWidth, setRoomWidth] = useState<number>(2990);
  const [plankLength, setPlankLength] = useState<number>(1380);
  const [plankWidth, setPlankWidth] = useState<number>(212);
  const [flooringDetails, setFlooringDetails] = useState<FlooringDetails>({
    plankLength: 1380,
    plankWidth: 212,
  });

  function updateDimension(event: any, setter: Dispatch<any>) {
    setter(parseInt(event.target.value, 10));
  }

  return (
    <div className="App">
      <SectionHeading>Room dimensions</SectionHeading>
      <InputGroup>
        <label>
          Length
          <input
            type="number"
            value={roomLength}
            onChange={(e: any) => updateDimension(e, setRoomLength)}
          />
        </label>
        <label>
          Width
          <input
            type="number"
            value={roomWidth}
            onChange={(e: any) => updateDimension(e, setRoomWidth)}
          />
        </label>
      </InputGroup>

      <SectionHeading>Flooring details</SectionHeading>
      <InputGroup>
        <label>
          Length
          <input
            type="number"
            value={plankLength}
            onChange={(e: any) => updateDimension(e, setPlankLength)}
          />
        </label>
        <label>
          Width
          <input
            type="number"
            value={plankWidth}
            onChange={(e: any) => updateDimension(e, setPlankWidth)}
          />
        </label>
        <button onClick={() => setFlooringDetails({ plankWidth, plankLength })}>
          Visualize
        </button>
      </InputGroup>

      <Floor
        roomLength={roomLength}
        roomWidth={roomWidth}
        {...flooringDetails}
      />
    </div>
  );
}

export default App;
