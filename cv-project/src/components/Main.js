import React from "react";
import Profile from "./Profile";
import Employment from "./Employment";
import Education from "./Education";
import Skills from "./Skills";
import Header from "./Header";

export default function Main(props) {
  const {data} = props;
  return (
    <main className="page">
      <Header data={data} />
      <Profile data={data} />
      <Employment data={data} />
      <Education data={data} />
      <Skills data={data} />
    </main>
  );
}
