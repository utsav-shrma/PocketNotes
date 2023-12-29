import { useState } from 'react'
import './App.css'
import ListNotes from '../Notes/ListNotes'
import ListGroups from '../Groups/ListGroups'
import CreateGroupForm from '../Groups/CreateGroupForm'

function App() {
  

  return (
    <div id="main-container">
      <CreateGroupForm></CreateGroupForm>
      <ListGroups></ListGroups>
      <ListNotes></ListNotes>
    </div>
  )
}

export default App
