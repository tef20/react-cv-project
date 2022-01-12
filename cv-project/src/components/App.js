import React from "react";
import Main from "./Main";
import { exampleData } from "../example_data";

export default function App() {
  return (
    <div>
      <Main data={exampleData} />
    </div>
  );
}
