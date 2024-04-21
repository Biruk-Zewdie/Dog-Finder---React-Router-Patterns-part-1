import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link, useParams, Navigate } from "react-router-dom";
import "./DogInfo.css"

const DogInfo = ({ dogs }) => {

    const { name } = useParams();

    const dogTobeRendered = dogs.find((dog) => dog.name === name)

    if (dogTobeRendered) {

        return (
            <div>
                <img src={dogTobeRendered.src} alt={dogTobeRendered.name} />
                <h2>{dogTobeRendered.name}</h2>
                <p className= "dogInfo-facts" >{dogTobeRendered.facts.map((fact) => (
                    <li key= {uuidv4()}>{fact}</li>
                ))}</p>
                <h2>Age: {dogTobeRendered.age} years old</h2>
                <li className="dogInfo-link">
                    <Link to="/dogs">
                        Go Back
                    </Link>
                </li>
            </div>
        )

    } else {
        return (<Navigate to="/dogs" />)
    }
}

export default DogInfo;