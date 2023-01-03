import React , { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"; //to create links in the navbar //useLocation hook 
import "../styles/Navbar.css"
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';; //hmburger button for navbar

function Navbar() {
    //create a state when t expand the navbar
    const [expandNavbar , setExpandNavbar] = useState(false); //will be false initially
    //will get infromation where in the website user in
    const location = useLocation();
    // a function which will run when the location changes
    useEffect(() => {
        setExpandNavbar(false);
    }, [location] )

  return (
    // if expandNavbar is true set it to open, if not set it to close.
    <div className = "navbar" id={expandNavbar ? "open" : "close"}> 
    <div className = "toggleButton">
        {/* so whenever clcik on the button, the state will change to the opposite of the previous state
        if it is false--> true, if it is true it will become false. */}
        <button onClick = { 
            () => {
                setExpandNavbar ((prev => !prev));
                  }
                }> 
            <ReorderOutlinedIcon />
        </button>
    </div>

    <div className="links">
        <Link to="/"> Home </Link>
        <Link to ="/projects"> Projects </Link>
        <Link to = "/experience"> Experience </Link>
    </div>
    </div>
  )
}

export default Navbar;