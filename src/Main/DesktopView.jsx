import React,{useEffect,useState} from 'react'
import { useDispatch } from "react-redux";
import './DesktopView.css'
import { setMobileView } from '../features/utility/utility';
import { useNavigate } from 'react-router-dom';
import ListGroups from "../Groups/ListGroups";
import ListNotes from "../Notes/ListNotes";

function DesktopView() {
    const dispatch=useDispatch();
    dispatch(setMobileView(false));
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update windowWidth when the window is resized
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Attach event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if(windowWidth<=800){
      
      navigate('/mobile');
    }
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
    
  return (
    <div id="main-container">
        <ListGroups></ListGroups>
        <ListNotes></ListNotes>
      </div>
  )
}

export default DesktopView