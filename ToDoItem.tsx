import React from "react";

interface IToDoItem {
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