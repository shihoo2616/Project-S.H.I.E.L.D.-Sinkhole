import { BrowserRouter, Routes, Route } from "react-router-dom";
import EscapeSRIPlannerPage from "./EscapeSRIPlannerPage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<EscapeSRIPlannerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
