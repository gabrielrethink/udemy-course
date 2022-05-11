import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./routes";

import SecretWord from "./routes/SecretWord/SecretWord";
import { MainNavBar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secretword" element={<SecretWord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
