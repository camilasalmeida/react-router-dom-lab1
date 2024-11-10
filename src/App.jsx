// src/App.jsx
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'



const App = () => {
  return (
  <>
  <NavBar />
  <h1>Hello world!</h1>
  </>
  )
}


export default App
