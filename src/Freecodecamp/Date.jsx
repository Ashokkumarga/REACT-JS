import React from "react";

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current Date : {props.date}</p>
    </div>
  );
};

class Date extends React.Component {
  render() {
    return <h3>What is the Current Date ?</h3>;
    <CurrentDate date={Date()} />;
    <CurrentDate date={Date()} />;
  }
}

export default Date;
