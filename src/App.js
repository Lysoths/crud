import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  const [user, setUser] = useState([]);
  const [activeUser, setActiveUser] = useState("");

  return (
    <div className='App'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Login
              user={user}
              setUser={setUser}
              activeUser={activeUser}
              setActiveUser={setActiveUser}
            />
          }
        />
        <Route
          exact
          path='/register'
          element={<Register user={user} setUser={setUser} />}
        />
        <Route
          exact
          path='/todo'
          element={
            <Todo
              activeUser={activeUser}
              setActiveUser={setActiveUser}
              user={user}
              setUser={setUser}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
