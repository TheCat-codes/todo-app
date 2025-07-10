import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TaskProvider } from './contexts/taskContext.jsx'
import { FilterProvider } from './contexts/filterContext.jsx'

createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </TaskProvider>
)
