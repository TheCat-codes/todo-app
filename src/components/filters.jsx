import { useFilters } from "../hooks/useFilters.js"

export function  Filter () {
  const { setFilters } = useFilters()

  function changeOption (e) {
    setFilters({ state: e.target.value})
  }

  return (
    <div className="selects">
      <label htmlFor="select">Homework State Filter: </label>
      <select onChange={changeOption} id="select" className="filterSelect">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </ div>
  )
}