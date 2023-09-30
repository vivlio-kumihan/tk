import { useState } from "react";
import List from "./TodoList";
import Form from "./TodoForm";

const Todo = () => {
  const todosList = [
    { id: 1, content: "14時〜　〓〓さんと打ち合わせ" },
    { id: 2, content: "楠葉モールでバナナ買って帰る" },
    { id: 3, content: "17時30分〜　今週火曜日、金曜日は便所掃除" },
    { id: 4, content: "20時00分〜　今週こそどうする家康を観る、絶対に観る" },
  ];
  const [todos, setTodos] = useState(todosList)

  const deleteTodo = (id) => {
    const selectTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(selectTodos);
  };  

  const createTodo = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <>
      <ul>
        <List todos={todos} deleteTodo={deleteTodo} />
      </ul>
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;