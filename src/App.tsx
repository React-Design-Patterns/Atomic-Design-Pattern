import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./components/pages/DetailPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
