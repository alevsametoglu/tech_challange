import "./App.css";
import PrimaryChallenge from "./pages/PrimaryChallenge";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SecondaryChallenge from "./pages/SecondaryChallenge";

function App() {
  const [selectedChallenge, setSelectedChallenge] = useState(2);
  return (
    <div className="App">
      <header style={{ display: "flex", padding: "10px" }}>
        <h1 style={{ flexGrow: "1" }}>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
        <button
          onClick={() => setSelectedChallenge(selectedChallenge === 1 ? 2 : 1)}
          type="button"
          className="btn btn-secondary btn-sm"
        >
          {selectedChallenge === 1 ? "pass challenge 2" : "pass challenge 1"}
        </button>
      </header>

      {selectedChallenge === 1 && <PrimaryChallenge />}
      {selectedChallenge === 2 && <SecondaryChallenge />}
    </div>
  );
}

export default App;
