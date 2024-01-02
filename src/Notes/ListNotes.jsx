import React from 'react'
import EmptyView from './EmptyView'
import NotesView from './NotesView'
import { useSelector, useDispatch } from 'react-redux'
function ListNotes() {
  let currGroupId = useSelector((state) => state.utility.currNoteGroupId);
  let currGroup=useSelector((state) => state.noteGroups.noteGroup);
  

  return (
    
    <div id="notes-container">
     
     {currGroup[currGroupId] && currGroup[currGroupId].length>0 ?<NotesView></NotesView>:<EmptyView></EmptyView>}
    
    
    </div>
    
  )
}

export default ListNotes