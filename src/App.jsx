import React from "react";
import Navbar from "./Udemy/Navbar";
// import Project from "./Project";
// import ClassA from "./Test/Class/ClassA";
// import Product from "./Product/Product";
// import Testing1 from "./Test/Test/Testing1";
// import Date from "./Freecodecamp/Date";
// import MyComponent from "./Freecodecamp/My Component";
// import Passarray from "./Freecodecamp/Passarray";
// import State1 from "./Freecodecamp/State1.jsx";
// import SetState1 from "./Freecodecamp/SetState1";
// import Toggle from "./Freecodecamp/ToggleElement";
import Counter from "./Freecodecamp/Counter";

function App() {
  return (
    <div>
      <Navbar />
      <h1>App Component</h1>
      {/* <Project />
      <ClassA />
      <Product />
      <MyComponent />
      <Date />
      <Passarray />
      <State1 />
      <SetState1 />
      <Testing1 />
      <Toggle /> */}
      <Counter />
    </div>
  );
}

export default App;
