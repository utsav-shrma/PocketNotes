import React from 'react'
import ListNotes from "../Notes/ListNotes";
import ListGroups from "../Groups/ListGroups";

import { useDispatch,useSelector } from "react-redux";
import { setMobileView,setGroupView } from '../features/utility/utility';

function MobileView() {
    const dispatch=useDispatch();
    let isGroupView = useSelector((state) => state.utility.isGroupView);
    dispatch(setMobileView(true));

  return (
    <div>
        {isGroupView?<ListGroups/>:<ListNotes/>}
        
    </div>
  )
}

export default MobileView