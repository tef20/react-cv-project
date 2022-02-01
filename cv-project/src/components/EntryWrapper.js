import React, { Component } from "react";
import EntryContent from "./EntryContent";
import { toggleState } from "./tools";

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: true,
    };
    this.toggleState = toggleState.bind(this);
  }

  toggleButtonHidden = (value) => this.toggleState("buttonHidden", value);

  render() {
    const { section, item, onEdit, onRemove } = this.props;

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
        <div className='entry--content'>
          <EntryContent section={section} item={item} />
        </div>
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
