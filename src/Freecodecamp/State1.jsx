import React from "react";

class State1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ashok kumar G A",
    };
  }

  render() {
    return (
      <div>
        <h1>State Component</h1>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}
export default State1;
