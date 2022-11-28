import React from "react";
import Project from "./Project";
import Testing from "./Test/Testing";
import ClassA from "./Test/Class/ClassA";

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <hr />
      <Testing />
      <Project />
      <ClassA />
    </div>
  );
}

export default App;
