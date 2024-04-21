import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = ({ dogs }) => {
    const navLink = dogs.map((dog) => (
        <li className="navList">
            <Link to={`/dogs/${dog.name}`}>
                {dog.name}
            </Link></li>))

    return (
        <nav>
            <li className="navList"><Link to="/dogs" end>
                Home
            </Link></li>
            {navLink}
        </nav>

    )

}

export default NavBar;