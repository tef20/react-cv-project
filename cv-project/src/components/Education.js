import React from "react";
import Section from "./Section";
import Entry from "./Entry";

export default function Education(props) {
  const items = props.data.education;

  const entries = items.map((item) => (
    <Entry
      startDate={item.start}
      endDate={item.end}
      title={`${item.institution} | ${item.location}`}
      description={item.description}
    />
  ));

  return <Section title='Education' content={entries} />;
}
