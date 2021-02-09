import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from './actions';
import {todos} from './states'
export const reducer = (state = todos,action) =>{
    let newTodos;
    switch(action.type){
        case ADD_TODO:
            newTodos = [...state]
            newTodos.push(action.payload);
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state]
            newTodos = newTodos.filter(todo => todo.id != action.payload)
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state]
            let idx = 0
            for(let i = 0; i < newTodos.length;i++){
                if(newTodos[i].id  == action.payload.id){
                    idx = i
                    break;
                }
            }
            newTodos[idx].status = action.payload.status;
            return newTodos;
    }
    return state;
}