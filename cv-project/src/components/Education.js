import React from "react";
import Section from "./Section";
import Entry from "./Entry";

export default function Education(props) {
  const item = {
    start: "01/01/1992",
    end: "01/01/1993",
    title: "Some Primary School",
    description:
      "akvjnadkfvnadkjvnasvnlknkv vsav ljasvn savnds vasv sa asgv fgdavsad  aegaevadg aae eagvag a v geva fdaagbfd",
  };

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
