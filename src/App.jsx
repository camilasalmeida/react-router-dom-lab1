// src/App.jsx
import MailboxForm from "./components/MailboxForm"
import MailboxList from "./components/MailboxList"
import MailboxDetails from "./components/MailboxDetails"
import "./App.css"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"

const App = () => {
  const [mailBoxes, setMailBoxes] = useState([])
  console.log("1. MailBoxes Array: ", mailBoxes)

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailBoxes.length + 1;
    setMailBoxes([...mailBoxes, newMailboxData])
  }
  //----------------------------------------------------------------------------\\
  return (
    <>
      <NavBar />
      <h1>Mailbox List</h1>

      <Routes>
        <Route path="/" element={<h2>Post Office 📩</h2>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes" element={<MailboxList mailBoxes={mailBoxes} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailBoxes={mailBoxes} />} />
        <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
      </Routes>
    </>
  )
}

export default App
