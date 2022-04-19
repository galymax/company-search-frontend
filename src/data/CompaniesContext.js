import { createContext, useContext, useReducer, useEffect } from "react"
import debouncedRequest from "../lib/debouncedRequest"

const CompaniesContext = createContext()
const fetchCompaniesDebounced = debouncedRequest(125)

function companiesReducer(state, action) {
  switch (action.type) {
    case 'companies': {
      return { ...state, companies: action.companies, isLoading: false }
    }
    case 'specialities': {
      return { ...state, specialities: action.specialities, isLoading: false }
    }
    case 'criteria': {
      return { ...state, criteria: action.criteria, isLoading: true }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CompaniesProvider({ children }) {
  const [state, dispatch] = useReducer(companiesReducer, {
    companies: [],
    specialities: [],
    criteria: {},
    isLoading: true
  })
  const value = { state, dispatch }

  useEffect(() => {
    fetchSpecialities(dispatch)
    fetchCompanies(dispatch)
  }, [])

  useEffect(() => {
    fetchCompanies(dispatch, state.criteria)
  }, [state.criteria])

  return <CompaniesContext.Provider value={value}>{children}</CompaniesContext.Provider>
}

function useCompanies() {
  const context = useContext(CompaniesContext)
  if (context === undefined) {
    throw new Error('useCompanies must be used within a CompaniesProvider')
  }
  return context
}

async function fetchSpecialities(dispatch) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/companies/specialities`)
  const body = await response.json()
  dispatch({ type: 'specialities', specialities: body })
}

async function fetchCompanies(dispatch, criteria) {
  // debounce
  fetchCompaniesDebounced(`${process.env.REACT_APP_API_URL}/companies?${new URLSearchParams(criteria)}`, body => {
    dispatch({ type: 'companies', companies: body })
  })
}

export { CompaniesProvider, useCompanies }