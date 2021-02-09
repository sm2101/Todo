import React from 'react'
import TodoItem from './TodoItem';

const style = {
    margin:"10vh 0"
}
const ConfirmAdd = () => {
    const {id,title,desc,dueDate, status} = JSON.parse(window.localStorage.getItem("TodoInfo"))
    return (
        <div style = {style}>
            <h1>Confirm task</h1>
            <TodoItem 
            id = {id} 
            title = {title} 
            desc = {desc} 
            due = {dueDate} 
            stat = {status} 
            confirm = {true}
            />
            
        </div>
    )
}

export default ConfirmAdd
