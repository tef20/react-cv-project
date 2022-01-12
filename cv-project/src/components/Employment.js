import React from "react";
import Entry from "./Entry";
import Section from "./Section";

export default function Employment(props) {
  const item = {
    start: "01/01/1992",
    end: "01/01/1993",
    title: "Employer",
    description:
      "akvjnadkfvnadkjvnasvnlknkv vsav ljasvn savnds vasv sa asgv fgdavsad  aegaevadg aae eagvag a v geva fdaagbfd",
  };
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
