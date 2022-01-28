import React, { Component } from "react";
import Subsection from "./Subsection";
import Entry from "./EntryWrapper";
import EntryForm from "./EntryForm";
import templates from "./itemTemplates";
import { exampleData as data } from "../example_data2";
import { barSeperatedList, genID } from "./tools";
import PopupOverlay from "./PopupOverlay";
import {
  addItem,
  editItem,
  handleFormSubmit,
  removeItem,
  toggleFormPopup,
} from "./formTools";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUnderEdit: null,
      formPopup: false,
      items: [...data.education],
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
            <div className='entry-date'>
              <span className='entry--date-start'>{startDate}</span>
              {" - "}
              <span className='entry--end-start'>{endDate}</span>
            </div>
          </div>
          <div className='entry--details'>
            <h3 className='entry--details-title'>
              {barSeperatedList(descriptor, institution, location)}
            </h3>
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
                formHeader={"Education"}
                itemId={this.state.idUnderEdit}
                itemTemplate={templates['education']}
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
          title={"Education"}
          addEntryHandler={true} // add handler?
          content={entries}
          addItem={() => this.toggleFormPopup(this.ids.newID())}
        />
      </>
    );
  }
}
