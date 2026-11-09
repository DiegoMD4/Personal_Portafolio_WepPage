import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";

const Admin = lazy(() => import("./page/admin/Admin"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/admin"
        element={
          <Suspense fallback={<div className="min-h-screen bg-night" />}>
            <Admin />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
