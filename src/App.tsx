import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import DetailLayout from "./layout/DetailLayout";
import LoginLayout from "./layout/LoginLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/detail" element={<DetailLayout />} />
        <Route path="/login" element={<LoginLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
