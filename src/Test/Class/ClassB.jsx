import React from "react";
class ClassB extends React.Component {
  render() {
    return (
      <>
        <h1>Class B Componet</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <p>Name : {this.props.data.name}</p>
        <p>DOB : {this.props.data.DOB}</p>
        <p>ID : {this.props.data.Id} </p>
      </>
    );
  }
}
export default ClassB;
