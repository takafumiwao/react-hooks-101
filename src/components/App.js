import React, { useEffect,useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import AppContext from '../contexts/AppContext'
import Events from './Events'
import OperationLogs from './OperationLogs'
import EventForm from './EventForm'
import reducer from '../reducers'


const APP_KEY = 'appWithRedux'

const App =() => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) :
  {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
      <EventForm />
      <Events />
      <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App
