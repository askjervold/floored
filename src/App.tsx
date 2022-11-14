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
  const [roomLength, setRoomLength] = useState<number>(306);
  const [roomWidth, setRoomWidth] = useState<number>(299);
  const [plankLength, setPlankLength] = useState<number>(138);
  const [plankWidth, setPlankWidth] = useState<number>(21.2);
  const [flooringDetails, setFlooringDetails] = useState<FlooringDetails>({
    plankLength: 138,
    plankWidth: 21.2,
  });

  function updateDimension(event: any, setter: Dispatch<any>) {
    setter(parseFloat(event.target.value));
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
