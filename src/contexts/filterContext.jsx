import { useState } from "react"
import { createContext } from "react"

export const FilterContext = createContext()

export function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({ state: 'all' })

  return (
    <FilterContext.Provider
      value={{
        filters, 
        setFilters
      }}
    >
      { children }
    </FilterContext.Provider>
  )
} 