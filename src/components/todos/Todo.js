import React from 'react'

const Todo = props => {

    return (
        <div>
            <span>{props.text}</span><button onCick={() =>
                props.delete(props.todo.id)}>DELETE</button>
        </div>
    )

}

export default Todo;
