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
    this.props.updateSectionItems(section, {
      id: this.props.idGenerator.newID(),
      ...values,
    });
    this.setState({ itemUnderEdit: "" });
    this.togglePopup(false);
  };

  handleEdit = (itemId) => {
    this.setState({ itemUnderEdit: itemId });
    this.togglePopup();
  };

  handleRemove = (itemId) => {
    
  }

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
                title={title}
                data={this.props.data}
                itemUnderEdit={this.state.itemUnderEdit}
                handleFormSubmit={this.handleFormSubmit}
              />
            }
          />
        )}
        <div className='section--header'>
          <h2 className='section--header-title'>{title}</h2>
          {type !== "simple" && (
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
          )}
        </div>
        <div className='section--content'>
          {
            <Entry
              data={this.props.data}
              handleFormSubmit={this.handleFormSubmit}
              handleEdit={(itemToEdit) => this.handleEdit(itemToEdit)}
              // handleRemove={()}
            />
          }
        </div>
      </section>
    );
  }
}
