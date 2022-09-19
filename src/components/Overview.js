import { Component } from "react";

class Overview extends Component {
  render() {
    const {items} = this.props.data;
    const elements = items.map((item, index) => <div key={index}>{item}</div>);
    return (
      <div>{elements}</div>
    );
  }
}

export default Overview;
