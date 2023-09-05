const ExampleChild = ({ num, str, myFunc }) => {
  return (
    <>
      <p>{str}</p>
      <p>{myFunc()}</p>
      <small><i>{num}</i></small>
    </>
  )
}

export default ExampleChild
