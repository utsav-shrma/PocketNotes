import React,{useState} from 'react'
import emptyImage from './empty-box.png'
import './ListGroups.css'
import GroupItems from './GroupItems'
import { useSelector, useDispatch } from 'react-redux'
import { addNoteGroup,addNote } from '../features/noteGroups/noteGroupSlice'
import { setformPopUpFlag } from '../features/utility/utility'
import CreateGroupForm from "../Groups/CreateGroupForm";
function ListGroups() {
  let noteGroup = useSelector((state) => state.noteGroups.noteGroup);
  let formPopUpFlag = useSelector((state) => state.utility.formPopUpFlag);
  const dispatch = useDispatch()

  return (
    <>
    {formPopUpFlag ? <CreateGroupForm></CreateGroupForm> : ""} 
    <div id="list-group-container">
      
      <h1 id="list-group-container-heading">Pocket Notes</h1>

  {/* {console.log(noteGroups)} */}
    
      {/* {(flag)? :<GroupItems></GroupItems>} */}
      <div id="list-notes-container">
      {(noteGroup.length==0?<div id="no-notes"><img src={emptyImage}></img></div> :"") }
        {noteGroup.map((group)=>{
        return <GroupItems key={group.id} group={group}></GroupItems>})}
      </div>
      
     
      <button id='add-Notes-Button' onClick={()=>{dispatch(setformPopUpFlag(true))}}>+</button>

    </div>
    </>
  )
}

export default ListGroups