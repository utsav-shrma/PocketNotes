import React,{ useState,useEffect }  from 'react'

import MobileView from "./MobileView";
import DesktopView from './DesktopView';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListNotes from "../Notes/ListNotes";
import ListGroups from "../Groups/ListGroups";

function DecideView() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  return (
    <div> {windowWidth<=800?<MobileView></MobileView> :<DesktopView></DesktopView>}</div>
  )
}

export default DecideView