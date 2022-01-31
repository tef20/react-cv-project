import React from "react";
import ListEntriesTemplate from "./EntriesTemplate";

export default function NamedEntry(props) {
  const descriptor = (
    <div className='entry--sidebar-descriptor'>{props.descriptor}</div>
  );
  const main = (
    <p className='entry--details-description'>{props.description}</p>
  );
  return <ListEntriesTemplate aside={descriptor} top={null} main={main} />;
}
