import { Add } from "./icons.jsx"
import { useTasks } from "../hooks/useTasks.js"

export function New () {
  const { addTask } = useTasks()

  function add (e) {
    e.preventDefault()
    const task = document.querySelector('.newTaskName').value
    addTask({ task })
    document.querySelector('.newTaskName').value = ''
  }
  return (
    <div className="addTask">
      <form className="addForm">
        <label htmlFor="taskname">New Task: </label>
        <input type="text" id="taskname" className="newTaskName" placeholder="add task name" required/>
        <button type='submit' onClick={add} className="addButton"><Add></Add></button>
      </form>
    </div>
  )
}