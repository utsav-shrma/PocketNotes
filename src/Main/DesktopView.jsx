import React, { Fragment } from 'react'

import { useDispatch } from "react-redux";
import './DesktopView.css'
import { setMobileView } from '../features/utility/utility';

import ListGroups from "../Groups/ListGroups";
import ListNotes from "../Notes/ListNotes";

function DesktopView() {
    const dispatch=useDispatch();
    dispatch(setMobileView(false));
    
  return (
    <div id="main-container">
        <ListGroups></ListGroups>
        <ListNotes></ListNotes>
      </div>
  )
}

export default DesktopView