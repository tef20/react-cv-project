import React from "react";
import DatedEntry from "./entryTemplates/DatedEntry";
import NamedEntry from "./entryTemplates/NamedEntry";
import SimpleEntry from "./entryTemplates/SimpleEntry";

export default function EntryContent(props) {
  const { section, item } = props;
  let content;
  switch (section) {
    case "education":
    case "employment":
      content = (
        <DatedEntry
          startDate={item.startDate}
          endDate={item.endDate}
          descriptor={item.descriptor}
          institution={item.institution}
          location={item.location}
          description={item.description}
        />
      );
      break;
    case "projects":
      content = (
        <NamedEntry
          descriptor={item.descriptor}
          description={item.description}
        />
      );
      break;
    default:
      content = <SimpleEntry description={item.description} />;
      break;
  }

  return content;
}
