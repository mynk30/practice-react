import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        text: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action)=>{
            // state: gives current initialState values; action: receive values
            console.log(action);
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)

        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text;
                }
                return todo;
            });
        }
    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer;