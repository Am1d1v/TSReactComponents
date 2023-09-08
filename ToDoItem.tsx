import React from "react";
import {Todo} from '../types'

interface IToDoItem extends Todo {
    id: string;
    title: string;
    completed: boolean;
    style?: React.CSSProperties
}

const ToDoItem = ({id, title, completed, style={}}: IToDoItem) => {

    return(
        <li style={{color: 'blue', backgroundColor: 'gray', ...style}}>
            <input type="checkbox" checked={completed}/>
            <span>{title}</span>
            <span>&times;</span>
        </li>
    )
}

export default ToDoItem;