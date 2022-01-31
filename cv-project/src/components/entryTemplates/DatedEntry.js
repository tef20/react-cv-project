import React from "react";
import ListEntriesTemplate from "./EntriesTemplate";
import { barSeperatedList } from "../tools";

export default function DatedEntry(props) {
  const date = (
    <div className='entry--sidebar-date'>
      <span className='entry--date-start'>{props.startDate}</span>
      {" - "}
      <span className='entry--end-start'>{props.endDate}</span>
    </div>
  );
  const top = (
    <h3 className='entry--details-title'>
      {barSeperatedList(props.descriptor, props.institution, props.location)}
    </h3>
  );
  const main = (
    <p className='entry--details-description'>{props.description}</p>
  );
  return <ListEntriesTemplate aside={date} top={top} main={main} />;
}
