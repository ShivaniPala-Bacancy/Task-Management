import React from 'react';

const tasks = (props) =>{
    return(
        <div>
            <strong><p style={{fontSize : "50px", color: "red"}}>Task List</p></strong>
            {props.children}
        </div>
    )
}

export default tasks;