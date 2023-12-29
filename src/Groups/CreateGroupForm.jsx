import React from 'react'
import './CreateGroupForm.css'

function CreateGroupForm() {
  return (
    <div id="group-form-container">
    <div id='group-form'>
        <div id="form-container">
            <h1>Create New Group</h1>
            <div id="group-name">
                <h1>Group Name</h1> 
                <textarea placeholder='Enter group name'></textarea>
            </div>
            <div id="choose-color">
                <h1> Choose Color</h1> 
                <div id="color-pallete-container">
                    <div id="color-1" className='color-pallete'></div>
                    <div id="color-2" className='color-pallete'></div>
                    <div id="color-3" className='color-pallete'></div>
                    <div id="color-4" className='color-pallete'></div>
                    <div id="color-5" className='color-pallete'></div>
                    <div id="color-6" className='color-pallete'></div>
                </div>
            </div>
            <div id="create-button-div"> <button id="create-button">  Create </button></div>
        </div>
       
        
    </div>
    </div>
  )
}

export default CreateGroupForm