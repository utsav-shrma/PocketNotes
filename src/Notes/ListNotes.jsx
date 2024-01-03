import React from 'react'
import EmptyView from './EmptyView'
import NotesView from './NotesView'
import { useSelector, useDispatch } from 'react-redux'
function ListNotes() {
  let currGroupId = useSelector((state) => state.utility.currNoteGroupId);
  

  return (
    
    <div id="notes-container">
     
     {currGroupId!=-1  ?<NotesView></NotesView>:<EmptyView></EmptyView>}
    
    
    </div>
    
  )
}

export default ListNotes