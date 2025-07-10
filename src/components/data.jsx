export function TaskCount ({ list = [] }) {
  const all = list.length
  const filterCompleted = list.filter(task => task.state === 'completed')
  const filterIncompleted = list.filter(task => task.state === 'incompleted')
  const completed = filterCompleted.length
  const incompleted = filterIncompleted.length

  return (
    <div className="data">
      <strong>Todas: { all }</strong>
      <strong>Completas: { completed }</strong>
      <strong>Incompletas: { incompleted }</strong>
    </div>
  )
}