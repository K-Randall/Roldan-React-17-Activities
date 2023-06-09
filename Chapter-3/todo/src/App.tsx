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
  const [term, setTerm] = useState('')

  useEffect(() => {
    console.log('Rendering <App />'
    )
  })

  const printTodoList = useCallback(() => {
    console.log('Changing todoList', todoList)
  }, [todoList])

  useEffect(() => {
    printTodoList()
  }, [todoList, printTodoList])

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

  const handleSearch = () => {
    setTerm(task)
  }

  const handleDelete = useCallback((taskId: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId)
    setTodoList(newTodoList)
  }, [todoList])

  const filteredTodoList = useMemo(() => todoList.filter((todo: Todo) => {
    console.log('Filtering...')
    return todo.task.toLowerCase().includes(term.toLocaleLowerCase())
  }), [term, todoList])

  return (
    <>
      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleCreate}>Create</button>

      <button onClick={handleSearch}>Search</button>

      <List todoList={filteredTodoList} handleDelete={handleDelete} />
    </>
  )
}

export default App