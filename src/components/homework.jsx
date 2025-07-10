import { Check, Delete } from "./icons.jsx"
import { useTasks } from "../hooks/useTasks.js"

export function Homework ({ task, text, id }) {
  const { removeTasks, aprove } = useTasks()
  const isCompleted = task.state === 'completed'
  const classname = isCompleted ? 'text completed' : 'text incompleted'
  return (
    <div className="homework">
      <span id="id">{ id }</span>
      <strong className={classname}>{ text }</strong>
      <button onClick={() => aprove({ task })}>
        <Check></Check>
      </button>
      <button onClick={() => removeTasks({ task })}>
        <Delete></Delete>
      </button>
    </div>
  )
}