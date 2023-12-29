import React from 'react'
import './NotesView.css'
import disableArrow from './Vector (5).png'
import activeArrow from './Vector (6).png'


function NotesView() {

 

  return (
    <div id="list-view-conatiner" >
        <div id="list-view-header">
          <div id="notes-group-logo">MN</div>
          <p id="notes-group-title">My Notes</p>
        </div>
        
        <div id="list-view-notes-container">
          <div id="individual-note">
            <p id="note-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit beatae rerum autem sit repudiandae iste a quos earum atque doloribus dolorum tenetur, sunt quae et eius maiores animi aspernatur.</p>
          <p id="date-time">9 Mar 2023 &#x25cf; 10:10 AM</p>
          </div>
          
          <div id="individual-note">
            <p id="note-content">Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</p>
          <p id="date-time">9 Mar 2023 &#x25cf; 10:10 AM</p>
          </div>

          <div id="individual-note">
            <p id="note-content">Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</p>
          <p id="date-time">9 Mar 2023 &#x25cf; 10:10 AM</p>
          </div>
          
        </div>
        <div id="text-input-container">
          <div id="input-area-and-button">
            <textarea placeholder='Here’s the sample text for sample work'type='textarea'></textarea>
            <button><img src={activeArrow} ></img></button>
          </div>
        </div>
    </div>
  )
}

export default NotesView