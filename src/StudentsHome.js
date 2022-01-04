import React from 'react'
import "./StudentsDetails.css"
import './App.css';
import {Link} from "react-router-dom";

export const StudentsHome = () => {
    
    return (
        <div>
            <nav>
                <Link id="home" to="/home">
                <div>Home</div>
                </Link>
                <Link id="students" to="/students">
                <div>Students</div>
                </Link>
                <Link id="contact" to="/contact">
                <div>Contact Us</div>
                </Link>
            </nav>
        </div>
    )
}

export default StudentsHome