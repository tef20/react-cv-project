import React from "react";
import Section from "./Section";
import Entry from "./Entry";

export default function Profile(props) {
  const content = (
    <Entry
      description={props.data.description}
      startDate={props.data.startDate}
    />
  );
  return <Section title='Profile' content={content} />;
}
