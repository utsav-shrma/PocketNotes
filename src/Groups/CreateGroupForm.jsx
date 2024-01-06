import React,{useRef} from 'react'
import './CreateGroupForm.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFormInputTitle,setFormInputColor,resetForm,setformPopUpFlag } from '../features/utility/utility';
import { addNoteGroup } from '../features/noteGroups/noteGroupSlice';
function CreateGroupForm() {

    const dispatch = useDispatch();
    let currentFormInput = useSelector((state) => state.utility.formInput)
    let titleInputHandler=(e)=>{

        if(e.target.value.length<30){
            dispatch(setFormInputTitle(e.target.value));
        }
        else{
            window.alert("Max Length!!");
        }
        
    };

    let radioChangeHandler=(e)=>{ 
        dispatch(setFormInputColor(e.target.value));

    };

    let createNewGroup=()=>{
       if(currentFormInput.title.length==0 || currentFormInput.color===''){
            window.alert('Can\'t be Empty');
       }
       else{
            dispatch(addNoteGroup(currentFormInput));
            dispatch(resetForm());
            dispatch(setformPopUpFlag(false));
       }
        
        
    };

  return (
    <div id="group-form-container" onClick={()=>{dispatch(setformPopUpFlag(false)); dispatch(resetForm());}}>
    <div id='group-form' onClick={(e)=>{ e.stopPropagation();}}>
        <div id="form-container">
            
            <h1>Create New Group</h1>

           
            <div id="group-name">

                <h1>Group Name</h1> 

                <textarea placeholder='Enter group name' value={currentFormInput.title} onChange={titleInputHandler}></textarea>
            </div>
            <div id="choose-color">
                <h1> Choose Color</h1> 
                <div id="color-pallete-container">
                    <input onChange={radioChangeHandler} name="colorChoice" type="radio" id="color-1" value="#B38BFA" className='color-pallete'></input>
                    <input onChange={radioChangeHandler} name="colorChoice" type="radio" id="color-2"  value="#FF79F2" className='color-pallete'></input>
                    <input onChange={radioChangeHandler} name="colorChoice" type="radio" id="color-3"  value="#43E6FC"className='color-pallete'></input>
                    <input onChange={radioChangeHandler} name="colorChoice" id="color-4" type="radio"  value="#F19576"className='color-pallete'></input>
                    <input onChange={radioChangeHandler} name="colorChoice" id="color-5" type="radio"  value="#0047FF"className='color-pallete'></input>
                    <input onChange={radioChangeHandler} name="colorChoice" id="color-6" type="radio"  value="#6691FF"className='color-pallete'></input>
                </div>
            </div>
            
            <div id="create-button-div"> <button id="create-button" onClick={createNewGroup}>  Create </button></div>
            
        </div>
       
        
    </div>
    </div>
  )
}

export default CreateGroupForm