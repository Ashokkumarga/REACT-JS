import React from "react";

class SetState1 extends React.Component {
  constructor() {
    super();
    this.state = {
      fName: "Ashok",
    };
    this.handler = this.handler.bind(this);
  }
  handler() {
    this.setState({
      fName: "Kumar",
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handler}>Click Me</button>
        <h1>{this.state.fName}</h1>
      </div>
    );
  }
}
export default SetState1;
