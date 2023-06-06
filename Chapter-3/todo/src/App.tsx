//defining some initial tasks and creating the todoList state,
//which we will pass to the list component

import {useState, useEffect, useMemo, useCallback} from 'react'

import List, {Todo} from './List'

const initialTodos = [
  {id: 1, task: 'Go grocery shopping'},
  {id: 2, task: 'Pay rent'}
]

function App() {
  const [todoList, setTodoList] = useState(initialTodos)
  const [task, setTask] = useState('')

  useEffect(() => {
    console.log('Rendering <App />'
    )
  })

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task
    }
    //Pushing the new todo to the list 
    setTodoList([...todoList, newTodo])
    //Resetting input value
    setTask('')
  }

  return (
    <>
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleCreate}>Create</button>

      <List todoList={todoList} />
    </>
  )
}

export default App