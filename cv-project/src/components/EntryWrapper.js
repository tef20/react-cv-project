import React, { Component } from "react";
import DatedEntry from "./entryTemplates/DatedEntry";
import NamedEntry from "./entryTemplates/NamedEntry";
import SimpleEntry from "./entryTemplates/SimpleEntry";

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: true,
    };
  }

  toggleState = (key, value) => {
    this.setState((prevState) => ({
      [key]: value ?? !prevState[key],
    }));
  };

  toggleButtonHidden = (value) => this.toggleState("buttonHidden", value);

  render() {
    const { section, item, onEdit, onRemove } = this.props;
    // if (section === 'education')

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

    return (
      <div
        className='entry--wrapper'
        onMouseEnter={(e) => {
          e.stopPropagation();
          this.toggleButtonHidden(false);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          this.toggleButtonHidden(true);
        }}
      >
        <div className='entry--content'>{content}</div>
        <div className={"entry--buttons"}>
          {onEdit && (
            <button
              type='button'
              className={`editButton ${
                this.state.buttonHidden ? "hidden" : ""
              }`}
              onClick={onEdit}
            >
              ✏️
            </button>
          )}
          {onRemove && (
            <button
              type='button'
              className={`deleteButton ${
                this.state.buttonHidden ? "hidden" : ""
              }`}
              onClick={onRemove}
            >
              ❌
            </button>
          )}
        </div>
      </div>
    );
  }
}
