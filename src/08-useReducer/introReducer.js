const initialState = [{
    id:1,
    todo:"Collect soul stone",
    done: false
}];

const todoReducer = (state=initialState, action = {}) =>{
    console.log(action);
    if(action.type === "[TODO] add todo"){
        return [...state, action.payload]
    }
    return state;
};

let todos = todoReducer();
const newTodo = {
    id:2,
    todo: "Collect power stone",
    done: false
};

const addTodoAction = {
    type: "[TODO] add todo",
    payload: newTodo 
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);