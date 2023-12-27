import React,{useState} from 'react'
import emptyImage from './empty-box.png'
import './ListGroups.css'
import GroupItems from './GroupItems'
function ListGroups() {

  let [flag,setFlag]=useState(false);
  return (
    <div id="list-group-container">
      <h1 id="list-group-container-heading">Pocket Notes</h1>

     

      {/* {(flag)? <div id="no-notes"><img src={emptyImage}></img></div> :<GroupItems></GroupItems>} */}
      <div id="list-notes-container"><GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems>
      <GroupItems></GroupItems></div>
      
     
      <button id='add-Notes-Button' onClick={()=>{setFlag(!flag)}}>+</button>

    </div>
  )
}

export default ListGroups