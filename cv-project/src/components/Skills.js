import React from "react";
import Entry from "./Entry";
import Section from "./Section";

export default function Skills() {
  const item = {
    title: "Skill1",
    description:
      "akvjnadkfvnadkjvnasvnlknkv vsav ljasvn savnds vasv sa asgv fgdavsad  aegaevadg aae eagvag a v geva fdaagbfd",
  };
  const content = <Entry title={item.title} description={item.description} />
  return <Section title='Skills' content={content} />;
}
