import React from "react"
import Logo from "./hourglass-620397_1280.jpg"

export default function NavBar() {
    return(
        <nav>
            <img src={Logo} alt="logo" className="logo"></img>
            <h2>Where-IS</h2>
            <div className="search">
                <input type="text" placeholder="Search..." className="nav-search"></input>
            </div>
            <div className="menu">
                <i className="uil uil-list-ui-alt"></i>
            </div>
        </nav>
    )
}