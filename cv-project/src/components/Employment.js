import React from "react";
import Entry from "./Entry";
import Section from "./Section";

export default function Employment(props) {
  const items = props.data.employment;

  const entries = items.map((item) => (
    <Entry
      startDate={item.start}
      endDate={item.end}
      title={`${item.role} | ${item.employer} | ${item.location}`}
      description={item.description}
    />
  ));

  return <Section title='Employment' content={entries} />;
}
