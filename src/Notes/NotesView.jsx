import React from 'react'
import './NotesView.css'
import disableArrow from './Vector (5).png'
import activeArrow from './Vector (6).png'
import { useSelector, useDispatch } from 'react-redux'
import { addNote } from '../features/noteGroups/noteGroupSlice'
import NoteItem from './NoteItem'
import { setNoteContent,resetNoteContent } from '../features/utility/utility'

function NotesView() {
  let currGroupId = useSelector((state) => state.utility.currNoteGroupId);
  let noteContent = useSelector((state) => state.utility.noteContent);
  let currGroup=useSelector((state) => state.noteGroups.noteGroup[currGroupId]);
  const dispatch = useDispatch();
  let textChangeHandler=(e)=>{dispatch(setNoteContent(e.target.value));};
  let submitNote=()=>{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('en-US', { month: 'short' });
    const day = currentDate.getDate();
    const formattedDateTime = `${day} ${month} ${year}`;
    const formattedTime = currentDate.toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: 'numeric' });
    const formattedTimeUpperCase = formattedTime.replace(/\b(?:am|pm)\b/gi, match => match.toUpperCase());
// console.log(formattedTimeUpperCase,formattedDateTime);
    dispatch(addNote({id:currGroupId,noteObj:{content:noteContent,date:formattedTimeUpperCase,time:formattedDateTime}}));
    dispatch(resetNoteContent());
  };
  
  

  return (
    <div id="list-view-conatiner" >
        <div id="list-view-header">
          <div id="notes-group-logo" style={{backgroundColor:currGroup.color}}>{currGroup.abbrv}</div>
          <p id="notes-group-title">{currGroup.title}</p>
        </div>
        
        <div id="list-view-notes-container">
          {currGroup.notes.map((note,index)=>{ return <NoteItem key={index} note={note} ></NoteItem>})}
          
          
        </div>
        <div id="text-input-container">
          <div id="input-area-and-button">
            <textarea  value={noteContent}onChange={textChangeHandler} placeholder='Here’s the sample text for sample work'type='textarea'></textarea>
            <button disabled={noteContent===""} onClick={submitNote}><img src={(noteContent===""?disableArrow:activeArrow)} ></img></button>
          </div>
        </div>
    </div>
  )
}

export default NotesView