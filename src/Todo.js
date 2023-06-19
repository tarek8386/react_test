import React, { Component } from "react";
import Header from "./common/header-component";
import Todos from "./common/todo-component";
import Button from "./common/button-component";
import axios from "axios";
class Todo extends Component {
  state = {
    todoList: [],
  };
  async componentDidMount() {
    
    try {
      const res=await axios.get("https://dummyjson.com/todos");
      console.log(res);
      
        this.setState({ todoList: res.data.todos });
    } catch (err) {
      alert("an error occurred");
    }
  }

  render() {
    return (
      <div className="container bg-white card">
        <Header text="Todo App" />

        <Button
          text="Add New Todo"
          className="btn btn-info p-3 rounded-4 m-2"
        />
        <hr />
        {this.state.todoList.map((item, index) => {
          return <Todos todo={item.todo} />;
        })}
      </div>
    );
  }
}

export default Todo;
