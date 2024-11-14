import React, { useState } from 'react'
import { useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type){
        // case "increment":
        //     return{
        //         counter: state.counter + 1,
        //     };
        // case "decrement":
        //     return{
        //         counter: state.counter - 1,
        //     };

        case "add-task":
            return{
                tasks: [
                    ...state.tasks,
                    {name: action.payload,
                    isCompleted: false},
                ],
            };
        case "toggle-task":
            return{
                ...state,
                tasks: state.tasks.map((item, index) => index === action.payload ? {
                    ...item, isCompleted: !item.isCompleted
                }
                    : item
                    )
            }
        default:
            return state;
    }
};

const useReducerHook = () => {
    // const [state, dispatch] = useReducer(reducer , {counter: 0})
    const [state, dispatch] = useReducer(reducer, {tasks: [], tasksCount: 0});
    const [inputValue, setInputValue] = useState("");


  return (
    <div>
        {/* <p>{state.counter}</p> */}
        {/* <button onClick={() => dispatch({ type: "increment" })}>increment</button> */}
        {/* <button onClick={() => dispatch({ type: "decrement"})}>decrement</button> */}

        <input  value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={() => {dispatch({ type: "add-task", payload: inputValue }); setInputValue("");}}>Adicionar</button>
        {state.tasks.map((task, index) => (
            <p onClick={() => dispatch({ type: "toggle-task", payload: index})} style={{textDecoration: task.isCompleted ? "line-through" : "none"}}>{task.name}</p>
        ))}
    </div>
  )
}

export default useReducerHook