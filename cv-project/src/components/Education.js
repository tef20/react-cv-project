import React from "react";
import Section from "./Section";
import Entry from "./Entry";

export default function Education() {
  const item = {
    start: "01/01/1992",
    end: "01/01/1993",
    title: "Some Primary School",
    description:
      "akvjnadkfvnadkjvnasvnlknkv vsav ljasvn savnds vasv sa asgv fgdavsad  aegaevadg aae eagvag a v geva fdaagbfd",
  };

  const content = (
    <Entry
      startDate={item.start}
      endDate={item.end}
      title={item.title}
      description={item.description}
    />
  );

  return <Section title='Education' content={content} />;
}
