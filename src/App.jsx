import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />s
      </Routes>
    </BrowserRouter>
  );
}
