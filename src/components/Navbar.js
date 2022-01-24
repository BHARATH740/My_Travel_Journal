import React from "react";
import Globe from "./images/globe.png";

export default function Navbar(){
    return (
        <div className="navbar">
            <img src={Globe}></img>
            <h2>My Travel Journal</h2>
        </div>
    )
}