import React from "react";
import Section from "./Section";
import Entry from "./Entry";

export default function Profile(props) {
  const content = <Entry description={props.data.profile.description} />;
  return <Section title='Profile' content={content} />;
}
