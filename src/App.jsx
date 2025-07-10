import './App.css'
import { List } from './components/tasklist.jsx'
import { Header } from './components/header.jsx'
import { New } from './components/addTask.jsx'
import { useFilters } from './hooks/useFilters.js'
import { TaskCount } from './components/data.jsx'
import { useTasks } from './hooks/useTasks.js'

function App() {
  const { tasks } = useTasks()
  const { filtered } = useFilters()
  return (
    <>
      <Header></Header>
      <List list={filtered}></List>
      <New></New>
      <TaskCount list={tasks}></TaskCount>
    </>
  )
}

export default App
