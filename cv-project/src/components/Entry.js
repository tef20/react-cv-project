import React, { Component } from "react";

export default class Entry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { startDate, endDate, title, description } = this.props;
    return (
      <div className='entry'>
        {startDate && (
          <div className='entry--date'>
            <span className='entry--date-start'>{startDate}</span>
            {" - "}
            <span className='entry--end-start'>{endDate}</span>
          </div>
        )}
        <div className='entry--details'>
          {title && <h3 className='entry--details-title'>{title}</h3>}
          <p className='entry--details-description'>{description}</p>
        </div>
      </div>
    );
  }
}
