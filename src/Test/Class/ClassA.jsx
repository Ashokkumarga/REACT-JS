import React from "react";
import ClassB from "./ClassB";
class ClassA extends React.Component {
  User = {
    name: "Ashok",
    Id: 29,
    DOB: "26 July 2000",
  };
  render() {
    return (
      <>
        <h1>Class A Component</h1>
        <hr />
        <ClassB data={this.User} />
      </>
    );
  }
}

export default ClassA;
