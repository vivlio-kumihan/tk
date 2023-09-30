const List = ({ todos, deleteTodo }) => { 
  const complete = (id) => {
    deleteTodo(id);
  };

  return (
    <>
      {
        todos.map(item => {
          return (
            <li key={item.id}>
              <button onClick={() => complete(item.id)}>完了</button>
              <p>{item.content}</p>
            </li>
          )
        })
      }
    </>
  );
};

export default List;