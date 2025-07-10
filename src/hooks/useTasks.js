import { useContext } from "react"
import { TaskContext } from "../contexts/taskContext.jsx"

export function useTasks () {
  const { tasks, removeTasks, addTask, aprove, setTasks } = useContext(TaskContext)

  return { tasks, removeTasks, addTask, aprove, setTasks}
}