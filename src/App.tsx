import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Admin from "./page/admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
