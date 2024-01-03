import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formInput:{
        id:"",
        title:"",
        color:"",
        notes:[],
    },
    currNoteGroupId:-1,
    formPopUpFlag:false,
    noteContent:"",



}



export const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {

    setFormInputTitle:(state,action)=>{
        state.formInput.title=action.payload;
    },
    setFormInputColor:(state,action)=>{
        state.formInput.color=action.payload;
    },
    resetForm:(state)=>{
        state.formInput={ id:"",title:"", color:"",notes:[]};
    },
    setformPopUpFlag:(state,action)=>{
        state.formPopUpFlag=action.payload;
    },
    setCurrNoteGroupId:(state,action)=>{
        state.currNoteGroupId=action.payload;
    },
    setNoteContent:(state,action)=>{
        state.noteContent=action.payload;
    },
    resetNoteContent:(state)=>{
        state.noteContent="";
    },

  },
})

// Action creators are generated for each case reducer function
export const { setFormInputTitle,setFormInputColor,resetForm,setformPopUpFlag,setCurrNoteGroupId,setNoteContent,resetNoteContent } = utilitySlice.actions

export default utilitySlice.reducer