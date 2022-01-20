import React, { Component } from "react";
import EditPopup from "./EditPopup";
import Entry from "./Entry";
import EntryForm from "./EntryForm";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: true,
      popupOverlay: false,
      itemUnderEdit: "",
    };
  }

  capitalize(string) {
    if (/[A-Za-z]/.test(string)) {
      return string
        .trim(" ")
        .split()
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
    }
  }

  toggleState = (key, value) => {
    this.setState((prevState) => ({
      [key]: value ?? !prevState[key],
    }));
  };

  toggleButtonHidden = (value) => this.toggleState("buttonHidden", value);

  togglePopup = (value) => this.toggleState("popupOverlay", value);

  handleFormSubmit = (e, section, values) => {
    e.preventDefault();
    // validation
    console.log(e, section, values);
    this.props.updateSectionItems(section, values);
    this.setState({ itemUnderEdit: "" });
  };

  render() {
    const { name, type, items } = this.props.data;
    const title = this.capitalize(name);

    return (
      <section
        className='section'
        onMouseOver={() => this.toggleButtonHidden(false)}
        onMouseOut={() => this.toggleButtonHidden(true)}
      >
        {this.state.popupOverlay && (
          <EditPopup
            togglePopup={this.togglePopup}
            content={
              <EntryForm
                section={name}
                item={this.state.itemUnderEdit}
                handleFormSubmit={this.handleFormSubmit}
              />
            }
          />
        )}
        <div className='section--header'>
          <h2 className='section--header-title'>{title}</h2>
          <button
            className={`section--add ${
              this.state.buttonHidden ? "hidden" : ""
            }`}
            type='button'
            name={title}
            onClick={this.togglePopup}
          >
            ➕
          </button>
        </div>
        <div className='section--content'>
          {
            <Entry
              section={name}
              type={type}
              items={items}
              handleFormSubmit={this.handleFormSubmit}
            />
          }
        </div>
      </section>
    );
  }
}
