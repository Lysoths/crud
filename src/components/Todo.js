import "./Todo.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Todo = ({ activeUser, user }) => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    setTodoList([...todoList, { id: Date.now(), todo: todo }]);
    setTodo("");
  };
  const todoDelete = (id) => {
    const newList = todoList.filter((el) => el.id !== id);
    setTodoList(newList);
  };

  return (
    <div className='todoContainer'>
      <div className='activeuser'>
        <p className=''>Welcome {activeUser}</p>
        <Link to='/'>
          <button>Logout</button>
        </Link>
      </div>
      <form
        action=''
        onSubmit={(e) => e.preventDefault()}
        className='entertodo'
      >
        <input
          type='text'
          name=''
          id=''
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Enter a Todo</button>
      </form>
      <div className='todolist'>
        {todoList &&
          todoList.map((item) => (
            <div className='todolist-container' key={item.id}>
              <p>{item.todo}</p>
              <div className='buttons'>
                <button onClick={() => todoDelete(item.id)}>Delete</button>
                <button
                  onClick={() =>
                    setTodoList(
                      todoList.map((el) =>
                        el.id === item.id
                          ? { ...el, todo: prompt("enter a new todo") }
                          : el
                      )
                    )
                  }
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;
