import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link} from "react-router-dom";
import "./HomePage.css"

const HomePage = ({ dogs }) => {
    return (
        <div>
            <h2>Dogs List</h2>
            <ul className= "dog-card">
                {dogs.map((dog, idx) => (
                    dog.src && 
                    <li key= {uuidv4()}>
                        <Link to={`/dogs/${dog.name}`}>
                            {<img src={dog.src} alt= {dog.name}/>}
                        </Link>
                        <h3>{dog.name}</h3>
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default HomePage;