const ExampleChild = ({ num, str, myFunc }) => {
  return (
    <>
      <p>{str}</p>
      <p>{myFunc()}</p>
      <p>{num}</p>
    </>
  )
}

export default ExampleChild
