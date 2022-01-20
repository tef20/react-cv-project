import React, { Component } from "react";

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: true,
    };
  }

  // todo tidy: put in sep module
  toggleState = (key, value) => {
    this.setState((prevState) => ({
      [key]: value ?? !prevState[key],
    }));
  };

  toggleButtonHidden = (value) => this.toggleState("buttonHidden", value);

  render() {
    const { type, items } = this.props;

    return (
      <div className='entries'>
        {items.map((item) => {
          const {
            id,
            startDate,
            endDate,
            descriptor,
            institution,
            location,
            description,
          } = item;

          return (
            <div
              key={id}
              className='entry'
              onMouseEnter={(e) => {
                e.stopPropagation();
                this.toggleButtonHidden(false);
              }}
              onMouseLeave={(e) => {
                e.stopPropagation();
                this.toggleButtonHidden(true);
              }}
            >
              {type !== "simple" && (
                <div className='entry--sidebar'>
                  {type === "date" ? (
                    <div className='entry-date'>
                      <span className='entry--date-start'>{startDate}</span>
                      {" - "}
                      <span className='entry--end-start'>{endDate}</span>
                    </div>
                  ) : (
                    <div className='entry--descriptor'>
                      <span className='entry--descriptor'>{descriptor}</span>
                    </div>
                  )}
                </div>
              )}
              <div className='entry--details'>
                {type === "date" && (
                  <h3 className='entry--details-title'>
                    {[descriptor, institution, location].join(" | ")}
                  </h3>
                )}
                <p className='entry--details-description'>{description}</p>
              </div>
              <div>
                <button
                  type='button'
                  className={`editButton ${
                    this.state.buttonHidden ? "hidden" : ""
                  }`}
                  name={id}
                  onClick={() => console.log(id)}
                >
                  ✏️
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
