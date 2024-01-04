import { useState } from "react";
import "./App.css";
import MobileView from "./MobileView";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DesktopView from "./DesktopView";
import ListNotes from "../Notes/ListNotes";
import ListGroups from "../Groups/ListGroups";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesktopView />} />
        <Route path="mobile" element={<MobileView />} />
        <Route path="group" element={<ListGroups />} />
        <Route path="note" element={<ListNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
