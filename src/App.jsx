import React from "react";
import Navbar from "./Udemy/Navbar";
// import Project from "./Project";
import Testing from "./Test/Testing";
// import ClassA from "./Test/Class/ClassA";
import Product from "./Product/Product";

function App() {
  return (
    <div>
      <Navbar />
      <h1>App Component</h1>
      <Testing />
      {/* <Project />
      <ClassA />*/}
      <Product />
    </div>
  );
}

export default App;
