import React from "react";
import "regenerator-runtime/runtime";
import "./App.css";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Home from "./components/Items/Home";
import CarDetails from "./components/Items/CarDetails";
import DollDetails from "./components/Items/DollDetails";
import BikeDetails from "./components/Items/BikeDetails";

function App() {
  const pages = ["bike", "doll", "car"];

  const { transcript } = useSpeechRecognition();

  return (
    <>
      <h1>A11y</h1>
      <BrowserRouter>
        <div id="links" className="links">
          <nav>
            <ul>
              <li>
                <Link to="/car">Car</Link>
              </li>
              <li>
                <Link to="/bike">Bike</Link>
              </li>
              <li>
                <Link to="/doll">Doll</Link>
              </li>
            </ul>
          </nav>
        </div>

        {transcript && pages.includes(transcript) && (
          <Navigate to={`/${transcript}`} replace={true} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<CarDetails />} />
          <Route path="/doll" element={<DollDetails />} />
          <Route path="/bike" element={<BikeDetails />} />
        </Routes>
      </BrowserRouter>

      <p id="transcript">Transcript: {transcript}</p>
      <button onClick={() => SpeechRecognition.startListening()}>Start</button>
    </>
  );
}

export default App;
