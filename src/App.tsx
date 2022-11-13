import "./App.css";
import Floor from "./Floor";

function App() {
  return (
    <div className="App">
      <Floor
        roomLength={3060}
        roomWidth={2990}
        plankLength={1380}
        plankWidth={212}
      />
    </div>
  );
}

export default App;
