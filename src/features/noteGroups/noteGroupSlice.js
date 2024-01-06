import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noteGroup: [],

}
  
const findTitleAbbrv=(title)=>{
  const myArray = title.split(" ");
  let abbrv="";
  for(let i=0;i<2 && i<myArray.length;i++){
    if(isNaN(myArray[i][0])){abbrv+=myArray[i][0].toUpperCase();}
      
  }
  
  return abbrv;
}
export const noteGroupSlice = createSlice({
  name: 'noteGroups',
  initialState,
  reducers: {

    addNoteGroup:(state,action)=>{
      let formInput={...action.payload};
      formInput.id=state.noteGroup.length;
      formInput.abbrv=findTitleAbbrv(formInput.title);
      state.noteGroup.push(formInput);


    },

    addNote:(state,action)=>{
      state.noteGroup[action.payload.id].notes.push(action.payload.noteObj);
    },

   

  },
})

// Action creators are generated for each case reducer function
export const { addNoteGroup,addNote } = noteGroupSlice.actions

export default noteGroupSlice.reducer