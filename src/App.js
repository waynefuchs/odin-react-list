import { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid(),
      },
      tasks: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleDelete = (event) => {
    this.setState({
      tasks: this.state.tasks.filter(
        (task) => task.id !== event.target.dataset.delete
      ),
    });
  };

  handleChange = (event) => {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (event) => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
      },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            type="text"
            value={task.text}
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} delFn={this.handleDelete} />
      </div>
    );
  }
}

export default App;
