import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noteGroup: [],

}
// { groupTitle:"",
//             logo:"",
//             color:"",
//           notes:[]}
// let noteObj={noteContent:"",date:"",time:""}
// noteGroups:[
//   {
//     id,
//     groupTitle,
//     logo,
//     color,
//     [{	id,
//       noteContent,
//       date,
//       time
//     },{}]
//   },{}
  
//   ]
  

export const noteGroupSlice = createSlice({
  name: 'noteGroups',
  initialState,
  reducers: {

    addNoteGroup:(state,action)=>{
      state.noteGroup.push(action.payload);
      
      // console.log(action.payload );
      // console.log(state.noteGroup);
    },

    addNote:(state,action)=>{
      state.noteGroup[action.payload.index].push[action.payload.noteObj];
    }

    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addNoteGroup,addNote } = noteGroupSlice.actions

export default noteGroupSlice.reducer