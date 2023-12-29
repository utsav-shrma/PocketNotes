import React,{useState} from 'react'
import emptyImage from './empty-box.png'
import './ListGroups.css'
import GroupItems from './GroupItems'
import { useSelector, useDispatch } from 'react-redux'
import { addNoteGroup,addNote } from '../features/noteGroups/noteGroupSlice'
function ListGroups() {
  const noteGroup = useSelector((state) => state.noteGroups.noteGroup)
  const dispatch = useDispatch()
  let [flag,setFlag]=useState(false);
  return (
    <div id="list-group-container">
      <h1 id="list-group-container-heading">Pocket Notes</h1>

  {/* {console.log(noteGroups)} */}
    
      {/* {(flag)? :<GroupItems></GroupItems>} */}
      <div id="list-notes-container">
      {(noteGroup.length==0?<div id="no-notes"><img src={emptyImage}></img></div> :"") }
        {noteGroup.map(()=>{
        return <GroupItems></GroupItems>})}
      </div>
      
     
      <button id='add-Notes-Button' onClick={()=>{dispatch(addNoteGroup({id:"1",note:"hi "})) ;console.log(noteGroup)}}>+</button>

    </div>
  )
}

export default ListGroups