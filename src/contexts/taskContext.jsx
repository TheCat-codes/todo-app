import { useState } from "react"
import { createContext } from "react"

export const TaskContext = createContext()

export function TaskProvider ({ children }) {
  const [tasks, setTasks] = useState(() => {
    const islocal = localStorage.getItem('taskList')
    return islocal ? JSON.parse(islocal) : [{text: 'sweep',id: 1, state: 'incomplete'},{text: 'mop the floor',id: 2, state: 'incomplete'}]
  })

  const removeTasks = ({ task }) => {
    const newTask = tasks.filter(hm => hm.text  !== task.text)
    localStorage.setItem('taskList', JSON.stringify(newTask))
    setTasks(newTask)
  }

  const addTask = ({ task }) => {
    if(task === '') return 
    const verify = tasks.findIndex( hm => hm.text === task)
    if(verify !== -1){
      const newTask = structuredClone(tasks)
      newTask[verify].state = 'incomplete'
      return setTasks(newTask)
    }
    const id = tasks[tasks.length - 1]?.id + 1
    const newArray = ([
      ...tasks,
      {
        text: task,
        id: id > 0 ? id : 1,
        state: 'incompleted'
      }
    ])
    localStorage.setItem('taskList', JSON.stringify(newArray))
    setTasks(newArray)
  }

  const aprove = ({ task }) => {
    const index = tasks.findIndex( hm => hm.id === task.id)
    if(index === -1) return

    const newTask = structuredClone(tasks)
    const state = newTask[index].state
    newTask[index].state = state === 'completed' ? 'incompleted' : 'completed'
    localStorage.setItem('taskList', JSON.stringify(newTask))
    setTasks(newTask)
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        removeTasks,
        addTask,
        aprove
      }}
    >
      { children }
    </TaskContext.Provider>
  )
}