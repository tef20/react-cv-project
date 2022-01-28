import React, { Component } from "react";
import Subsection from "./Subsection";
import Entry from "./EntryWrapper";
import EntryForm from "./EntryForm";
import { exampleData as data } from "../example_data2";
import { barSeperatedList, genID } from "./tools";
import PopupOverlay from "./PopupOverlay";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUnderEdit: null,
      formPopup: false,
      items: [...data.education],
    };
  }

  ids = genID();

  itemTemplate = [
    {
      name: "startDate",
      type: "date",
      label: "Start Date",
    },
    {
      name: "endDate",
      type: "date",
      label: "End Date",
    },
    {
      name: "descriptor",
      type: "text",
      label: "Qualification",
    },
    {
      name: "institution",
      type: "text",
      label: "Institution",
    },
    {
      name: "location",
      type: "text",
      label: "Location",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
  ];

  toggleFormPopup = (id) => {
    this.setState((prevState) => ({
      idUnderEdit: id,
      formPopup: !prevState.formPopup,
    }));
  };

  handleFormSubmit = (e, itemId, item) => {
    e.preventDefault();
    if (this.state.items.some((item) => item.id === itemId)) {
      this.editItem(itemId, item);
    } else {
      this.addItem(item);
    }
  };

  addItem = (newItem, id) => {
    newItem["id"] = id ?? this.ids.newID();
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));
  };

  editItem = (id, newItem) => {
    newItem.id = id;
    this.setState((prevState) => ({
      items: [
        ...prevState.items.map((item) => (item.id === id ? newItem : item)),
      ],
    }));
  };

  removeItem = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

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

    console.log({ id2: this.state.idUnderEdit });
    return (
      <>
        {this.state.formPopup && (
          <PopupOverlay
            content={
              <EntryForm
                formHeader={"Education"}
                itemId={this.state.idUnderEdit}
                itemTemplate={this.itemTemplate}
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
