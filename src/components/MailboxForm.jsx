
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    _id: 0,
    boxSize: '',
    boxholder: '',
}

const MailboxForm = (props) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox(formData)                                    // Calling the addPokemon function from the parent component (App.jsx) and passing the formData (new Pokemon details) to it.
        setFormData(initialState)                                     // Resetting the form state after submission using initialState.
        navigate('/mailboxes')                                         // Pass the path you wish to direct a user to.
    }
  
    const handleChange = ({ target }) => {                        // Destructing the event object. Extracting the target property, which is the element (input field) that triggered the event.
        setFormData({ ...formData, [target.name]: target.value });
      }

//-------------------------------------------------------------------\\
return (
    <main>
      <h2>New Mailbox 📬</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder: </label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="">Select a Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default MailboxForm