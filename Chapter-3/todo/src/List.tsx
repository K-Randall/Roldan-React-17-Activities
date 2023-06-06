//We are rendering each task of the todoList array by using the TAsk component
// and we pask task as a prop.
// The useEffect is to see how many renders the app is performing

import {FC, useEffect, memo} from 'react'
import Task from './Task'

//Types
export type Todo = {
    id: number,
    task: string
}

interface Props {
    todoList: Todo[]
}

const List: FC<Props> = ({ todoList }) => {
    useEffect(() => {
        //This effect is executed every new render
        console.log('Rendering <List/>')
    })

    return (
        <ul>
            {todoList.map((todo: Todo) => (
                <Task key={todo.id} id={todo.id} task={todo.task} />
            ))}
        </ul>
    )
}

export default memo(List)