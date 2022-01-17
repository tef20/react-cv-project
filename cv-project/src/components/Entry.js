import React, { Component } from "react";

export default class Entry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // types:
    //  - blurb
    //  -
    const { startDate, endDate, descriptor, description, summaryDetails } =
      this.props;
    const title = Object.keys(summaryDetails).length
      ? Object.values(summaryDetails).join(" | ")
      : false;
    console.log({ summaryDetails, title });
    return (
      <div className='entry'>
        {startDate && (
          <div className='entry--date'>
            <span className='entry--date-start'>{startDate}</span>
            {" - "}
            <span className='entry--end-start'>{endDate}</span>
          </div>
        )}
        {descriptor && (
          <div className='entry--descriptor'>
            <span className='entry--descriptor'>{descriptor}</span>
          </div>
        )}
        <div className='entry--details'>
          {title.length && <h3 className='entry--details-title'>{title}</h3>}
          <p className='entry--details-description'>{description}</p>
        </div>
      </div>
    );
  }
}
