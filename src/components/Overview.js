import { Component } from "react";

class Overview extends Component {
  render() {
    const {tasks} = this.props.data;
    const elements = tasks.map((item, index) => 
      <div key={index}>{item}</div>);
    return (
      <div>{elements}</div>
    );
  }
}

export default Overview;
