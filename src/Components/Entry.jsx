import React from "react";
import "../App.css";

function Entry(props) {
    return(
        <div className="facultyProfile">
            <div class="container">
                {props.key}
                <img className="profileImage" src={props.image} alt={props.faculty_name}/>
                <h2 className="profileName">Name: {props.faculty_name}</h2>
                <p>Email: </p>
            </div>
        </div>
    );
}

export default Entry;