import React, { Component } from "react";
import Subsection from "./Subsection";
import Entry from "./EntryWrapper";
import EntryForm from "./EntryForm";
import templates from "../data/itemTemplates";
import { exampleData as data } from "../data/example_data";
import { barSeperatedList, capitalize, genID } from "./tools";
import PopupOverlay from "./PopupOverlay";
import {
  addItem,
  editItem,
  handleFormSubmit,
  removeItem,
  toggleFormPopup,
} from "./formTools";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUnderEdit: null,
      formPopup: false,
      items: [...data.projects],
    };

    this.handleFormSubmit = handleFormSubmit.bind(this);
    this.toggleFormPopup = toggleFormPopup.bind(this);
    this.addItem = addItem.bind(this);
    this.editItem = editItem.bind(this);
    this.removeItem = removeItem.bind(this);
  }

  ids = genID();

  render() {
    const entries = this.state.items.map((item) => {
      const {
        id,
        startDate,
        endDate,
        descriptor,
        institution,
        location,
        description,
      } = item;

      const content = (
        <div className='entry'>
          <div className='entry--sidebar'>
            <span className="entry--sidebar-descriptor">{capitalize(descriptor)}</span>
          </div>
          <div className='entry--details'>
            <p className='entry--details-description'>{description}</p>
          </div>
        </div>
      );

      return (
        <Entry
          key={id}
          id={id}
          content={content}
          editItem={(idForEdit) => {
            this.toggleFormPopup(idForEdit);
          }}
          removeItem={(idForRemoval) => {
            this.removeItem(idForRemoval);
          }}
        />
      );
    });

    return (
      <>
        {this.state.formPopup && (
          <PopupOverlay
            content={
              <EntryForm
                formHeader={"Projects"}
                itemId={this.state.idUnderEdit}
                itemTemplate={templates["projects"]}
                formSubmitHandler={this.handleFormSubmit}
                togglePopup={this.toggleFormPopup}
                existingEntry={this.state.items.find(
                  (item) => item.id === this.state.idUnderEdit
                )}
              />
            }
            togglePopup={this.toggleFormPopup}
          />
        )}
        <Subsection
          title={"Projects"}
          addEntryHandler={true} // add handler?
          content={entries}
          addItem={() => this.toggleFormPopup(this.ids.newID())}
        />
      </>
    );
  }
}

