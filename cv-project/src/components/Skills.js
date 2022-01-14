import React from "react";
import Entry from "./Entry";
import Section from "./Section";

export default function Skills(props) {
  const items = props.data;

  const entries = items.map((item) => (
    <Entry startDate={item.skill} description={item.description} />
  ));
  return <Section title='Skills' content={entries} />;
}
