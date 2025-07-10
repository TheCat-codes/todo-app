import { useContext } from "react"
import { FilterContext } from "../contexts/filterContext.jsx"
import { useTasks } from "./useTasks.js"

export function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)
  const { tasks } = useTasks()

  const filtered = tasks.filter(task => {
      return (
        filters.state === 'all' ||
        task.state === filters.state
      )
  })

  return { filtered, filters, setFilters}
}