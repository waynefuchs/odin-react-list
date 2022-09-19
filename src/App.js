import { Component } from "react";
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
        <div class="AddItem">
          <input type="text" name="item" id="item" />
          <button name="button" onClick={this.addItem}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
