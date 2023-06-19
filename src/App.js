import React from "react";
import Counter from "./Counter";
import LogIn from "./logIn";
import Todo from "./Todo";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route path="/counter" element={<Counter/>} />
    <Route path="/logIn" element={<LogIn/>} />
    <Route path="/todo" element={<Todo/>} />
    </Routes>
  );
}

export default App;
