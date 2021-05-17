// src/context/FilterContext.js
import { createContext, useState, useContext } from "react"

// créer FilterContext object
export const FilterContext = createContext()

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use FilterContext outside of its provider`
    )
  }
  return context
}

export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("all")
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}