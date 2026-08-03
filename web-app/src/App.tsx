import { BrowserRouter, Routes, Route } from "react-router-dom";
import EscapeSRIPlannerPage from "./EscapeSRIPlannerPage";

export default function App() {
  return (
    <BrowserRouter basename="/sinkhole">
      <Routes>
        <Route path="/" element={<EscapeSRIPlannerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
