import React from "react";
import { exampleData as data } from "../example_data";
import Profile from "./Profile";
import Employment from "./Employment";
import Education from "./Education";
import Skills from "./Skills";
import Header from "./Header";

export default function App() {
  return (
    <main className='page'>
      <Header data={data} />
      <Profile data={data} />
      <Employment data={data} />
      <Education data={data} />
      <Skills data={data} />
    </main>
  );
}
