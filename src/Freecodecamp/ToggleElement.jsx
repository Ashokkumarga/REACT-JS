import React from "react";

class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      visibilty: false,
    };
    this.toggleVisibilty = this.toggleVisibilty.bind(this);
  }
  toggleVisibilty() {
    this.setState((state) => {
      if (state.visibilty === true) {
        return { visibilty: false };
      } else {
        return { visibilty: true };
      }
    });
  }
  render() {
    if (this.state.visibilty) {
      return (
        <div>
          <button onClick={this.toggleVisibilty}>Click me</button>
          <h1>You can see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibilty}>Click me</button>
        </div>
      );
    }
  }
}
export default Toggle;
