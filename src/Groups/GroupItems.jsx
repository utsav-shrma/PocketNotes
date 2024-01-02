import React,{useRef,useEffect} from 'react'
import './GroupItems.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrNoteGroupId } from '../features/utility/utility'

function GroupItems({group}) {
  const dispatch = useDispatch();

  //for keeping the div highlighted
  // const currRef=useRef();
  // const groupId = useSelector((state) => state.)
  // useEffect(()=>{if(group.id==)},[]); ref={currRef}

  return (
    
    <div id="list-of-groups"   onClick={()=>{dispatch(setCurrNoteGroupId(group.id))}}>
        <div id="list-icon" style={{backgroundColor:group.color,}}>{group.abbrv}</div>
        <div id="list-title">{group.title}</div>
      </div>
  )
}

export default GroupItems