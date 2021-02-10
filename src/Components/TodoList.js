import React , { useState }from 'react'
import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';





const TodoList = () => {
    const {todos} = useSelector(state => ({...state}));
    // console.log(todos);
    const style = {
        margin: '10vh 0',
    }
    return (
        <div style = {style}>
            <h1>Todo List</h1>
            {todos.map(({id,name,desc,dueDate,status}) => (<TodoItem key = {id} id = {id} title = {name} desc = {desc} due = {dueDate} stat = {status} confirm = {false}/>))}
            
        </div>
    )
}

export default TodoList
