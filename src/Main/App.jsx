import { useState } from 'react'
import './App.css'
import ListNotes from '../Notes/ListNotes'
import ListGroups from '../Groups/ListGroups'

function App() {
  

  return (
    <div id="main-container">
      <ListGroups></ListGroups>
      <ListNotes></ListNotes>
    </div>
  )
}

export default App
