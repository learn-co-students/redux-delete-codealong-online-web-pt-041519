import React from 'react'

const Todo = props => {
    console.log(props)
    return (
        <div>
            <span>{props.todo}</span>
            <button onClick={() => props.delete(props)}>DELETE</button>
        </div>
    )
}


export default Todo;
