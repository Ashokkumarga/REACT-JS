import React from "react";

// How to pass an array as props
const List = (props) => {
  return <p>{props.tasks.join(",")}</p>;
};

class Passarray extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
        <h1>To DO List</h1>
        <h4>List 1 :</h4>
        <List tasks={["a", "b", "c"]} />
        <h4>List 2:</h4>
        <List tasks={["d", "e", "f"]} />
      </div>
    );
  }
}
export default Passarray;
