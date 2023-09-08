import React from "react";

interface IToDoItem {
    id: string;
    title: string;
    completed: boolean;
}

const ToDoItem = ({id, title, completed}: IToDoItem) => {

    return(
        <li>
            <input type="checkbox" checked={completed}/>
            <span>{title}</span>
            <span>&times;</span>
        </li>
    )
}

export default ToDoItem;