import React from 'react'
import EmptyView from './EmptyView'
import NotesView from './NotesView'
function ListNotes() {
  return (
    
    <div id="notes-container">
     {/* <EmptyView></EmptyView> */}
    <NotesView></NotesView>
    
    </div>
    
  )
}

export default ListNotes