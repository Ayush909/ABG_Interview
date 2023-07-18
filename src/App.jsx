import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FileUploader from "./components/FileUploader";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import NumberSeparator from "./components/NumberSeparator";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes> */}
      <NumberSeparator />
    </>
  );
}

export default App;
