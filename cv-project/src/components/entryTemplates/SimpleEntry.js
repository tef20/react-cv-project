import React from "react";
import ListEntriesTemplate from "./EntriesTemplate";

export default function SimpleEntry(props) {
  const main = (
    <p className='entry--details-description'>{props.description}</p>
  );
  return <ListEntriesTemplate aside={null} top={null} main={main} />;
}

