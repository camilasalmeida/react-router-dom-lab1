import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const singleBox = props.mailBoxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  )

  if (!singleBox) {
    return <h2>Mailbox Not Found!</h2>;  
  }

  return (
    <>
      <h1>Mailbox Details:</h1>
      <dl>
      <dt>Box Number: </dt>
      <dd>{singleBox._id}</dd>
        <dt>Boxholder: </dt>
        <dd>{singleBox.boxholder}</dd>
        <dt>Box Size: </dt>
        <dd>{singleBox.boxSize}</dd>
      </dl>
    </>
  )
}

export default MailboxDetails;
