import React from 'react';

const userInput = (props) => {
    const style = {
        border: '1px solid #ccc',
        marginTop: '20px',
        padding: '8px'
      };

    return (
        <div className="UserInput">
            <input style={style} type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default userInput;