import React from 'react';
import styles from './Task.module.css'
const task =(props) =>{
    return(
        <div className={styles.BuildControl}>
            <input type="checkbox" onClick={props.checked}></input>

            {props.disabled ? 
            <s><p className={styles.Label}>{props.tName}</p></s>
             : <p className={styles.Label}>{props.tName}</p>}
            
            
            <button onClick={props.edit} disabled={props.disabled}>EDIT</button>
            <button onClick={props.delete} disabled={props.disabled}>DELETE</button>
        </div>
    )
}

export default task;