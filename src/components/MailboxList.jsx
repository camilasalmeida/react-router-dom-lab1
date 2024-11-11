import { Link } from "react-router-dom"

const MailboxList = (props) => {
  return (
    <>
      <ul>
        {props.mailBoxes.map((currentBox) => (
          <li key={currentBox._id}>
            <Link to={`/mailboxes/${currentBox._id}`}>{currentBox._id}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MailboxList
