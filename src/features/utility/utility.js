import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formInput:{
        id:"",
        title:"",
        color:"",
    },
    currNoteGroupId:null,
    formPopUpFlag:false,



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
        state.formInput={ id:"",title:"", color:""};
    },
    setformPopUpFlag:(state,action)=>{
        state.formPopUpFlag=action.payload;
    },
    setCurrNoteGroupId:(state,action)=>{
        state.currNoteGroupId=action.payload;
    },

  },
})

// Action creators are generated for each case reducer function
export const { setFormInputTitle,setFormInputColor,resetForm,setformPopUpFlag,setCurrNoteGroupId } = utilitySlice.actions

export default utilitySlice.reducer