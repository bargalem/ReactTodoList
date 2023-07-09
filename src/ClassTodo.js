import React, { Component } from "react";
import "./style.css"
const TodoItem=(props)=>{
    const {label}=props
    return <div className="listItem">
      <li>{label}</li>
      {/* <button onClick={()=>this.deteteItm()}>Delete</button> */}
      <button >Delete</button>
      </div>
      
}
export default class ClassTodo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (e) => {
    e.preventDefault();

    const newTodo = e.target.querySelector("input").value;
    console.log(newTodo);
    if (newTodo !== "") {
      const { todos } = this.state;
      this.setState({
        todos: [...todos, newTodo],
      });
      e.target.querySelector("input").value = "";
    } else {
      alert("Enter Data");
    }
  };

  reset = () => {
    this.setState({
      todos: [],
    });
  };

  deteteItm = (index) => {
    const { todos } = this.state;
    const allData = [...todos];
    const deteteText = allData.filter((item, idx) => {
      return index !== idx;
    });
    this.setState({
      todos: [deteteText],
    });
  };

  render() {
    return (
      <div className="maindiv">
        <div className="todoname_tag">
          <h2>
            <span>MyTodos:</span>
          </h2>
        </div>
        {this.state.todos.map((e) => (
          <TodoItem key={e} label={e} />
        ))}

        <form onSubmit={this.addTodo}>
          <input
            style={{ padding: "5px" }}
            type="text"
            name="label"
            id="label"
          />

          <button className="btn btn-primary">Add Todo</button>
        </form>

        <button
          style={{ margin: "10px" }}
          className="btn btn-primary"
          onClick={this.reset}
        >
          Clear All{" "}
        </button>
      </div>
    );
  }
}
