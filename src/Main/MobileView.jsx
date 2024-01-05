import React,{useState,useEffect} from 'react'
import ListNotes from "../Notes/ListNotes";
import ListGroups from "../Groups/ListGroups";
import { useNavigate } from 'react-router-dom';

import { useDispatch,useSelector } from "react-redux";
import { setMobileView,setGroupView } from '../features/utility/utility';

function MobileView() {
    const dispatch=useDispatch();
    let isGroupView = useSelector((state) => state.utility.isGroupView);
    dispatch(setMobileView(true));

    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update windowWidth when the window is resized
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Attach event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if(windowWidth>800){
      navigate('/');
    }
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div>
        {isGroupView?<ListGroups/>:<ListNotes/>}
        
    </div>
  )
}

export default MobileView