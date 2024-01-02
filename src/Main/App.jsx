import { useState } from 'react'
import './App.css'
import ListNotes from '../Notes/ListNotes'
import ListGroups from '../Groups/ListGroups'
import CreateGroupForm from '../Groups/CreateGroupForm'
import { useSelector, useDispatch } from 'react-redux'
import { setformPopUpFlag } from '../features/utility/utility'

function App() {
  let formPopUpFlag = useSelector((state) => state.utility.formPopUpFlag);
  const dispatch = useDispatch()

  return (
    <div id="main-container">
      {formPopUpFlag?<CreateGroupForm></CreateGroupForm>:""}
      
      <ListGroups></ListGroups>
      <ListNotes></ListNotes>
    </div>
  )
}

export default App
