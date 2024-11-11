import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const singleBox = props.mailBoxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  )

  console.log("Box object is: ", singleBox);

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
