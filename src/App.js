import { Component } from "react";

import Overview from "./components/Overview";
import "./App.css";


class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const newItemValue = document.querySelector('#item').value;
    this.setState({
      items: this.state.items.concat(newItemValue),
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="AddItem">
          <input type="text" name="item" id="item" />
          <button name="button" onClick={this.addItem}>
            Add
          </button>
        </div>
        <Overview data={this.state}/>
      </div>
    );
  }
}

export default App;
