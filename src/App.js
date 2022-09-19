import { Component } from "react";

import Overview from "./components/Overview";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: "" },
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      task: {
        text: event.target.value,
      },
    });
  };

  onSubmitTask = (event) => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "" },
    });
  };

  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="taskInput" />
          <button type="submit" onClick={this.onSubmitTask}>
            Add Task
          </button>
        </form>
        <Overview data={this.state} />
      </div>
    );
  }
}

export default App;
