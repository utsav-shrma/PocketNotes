import { useState } from "react";
import "./App.css";
import MobileView from "./MobileView";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DesktopView from "./DesktopView";
import ListNotes from "../Notes/ListNotes";
import DecideView from "./DecideView";
import ListGroups from "../Groups/ListGroups";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DecideView />} />
        <Route path="mobile" element={<MobileView />} />
        <Route path="desktop" element={<DesktopView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
