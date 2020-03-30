import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello, I'm {props.userName}, Previously known as {props.startingUserName}</p>
            <p>I'm the greatest programmer alive!</p>
        </div>
    )
}
 
export default userOutput;