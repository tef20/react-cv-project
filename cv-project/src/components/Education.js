import React, { Component } from "react";
import Subsection from "./Subsection";
import Entry from "./EntryWrapper";
import { exampleData as data } from "../example_data2";
import { barSeperatedList } from "./tools";
import { genID } from "../idGenerator";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...data.education],
    };
  }
  // EDUCATION //
  // section header
  // button:
  //  - visable when mouse over section
  //  - add to list
  // list
  //  - date
  //  - level / institution / location
  //  - description
  //  - button:
  //    - visable when mouse over list item
  //    - edit item -> popup, form updates state
  //  - button:
  //    - visable when mouse over list item
  //    - delete item -> removes item matching id from state
  // com

  ids = genID();

  exampleItem1 = {
    id: "test0",
    startDate: "01/01/1000",
    endDate: "01/01/2000",
    descriptor: "degree",
    institution: "uni",
    location: "location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
        incididunt ut labore et dolore magna aliqua.",
  };

  exampleItem2 = {
    id: "test1",
    startDate: "02/02/2222",
    endDate: "02/02/2222",
    descriptor: "New qual",
    institution: "school",
    location: "place",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
        incididunt ut labore et dolore magna aliqua.",
  };

  addItem = (newItem) => {
    newItem = { ...this.exampleItem1 };
    newItem["id"] = this.ids.newID();
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));
  };

  editItem = (id, newItem) => {
    newItem = { ...this.exampleItem2 };
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
          editItem={(idForEdit, item) => {
            this.editItem(idForEdit, item);
          }}
          removeItem={(idForRemoval) => {
            this.removeItem(idForRemoval);
          }}
        />
      );
    });

    return (
      <Subsection
        title={"Education"}
        addEntryHandler={true} // add handler?
        content={entries}
        addItem={this.addItem}
      />
    );
  }
}
