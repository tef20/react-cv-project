import React from "react";

export default function EntriesTemplate(props) {
  const { aside, top, main } = props;

  return (
    <>
      {aside && <div className='entry--sidebar'>{aside}</div>}
      <div className="entry--details">
        {top && <div className='entry--top'>{top}</div>}
        {main && <div className='entry--main'>{main}</div>}
      </div>
    </>
  );
}
