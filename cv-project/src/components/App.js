import React, { Component } from "react";
import { exampleData } from "../example_data";
import Section from "./Section";
import Header from "./Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = { ...exampleData };
  }

  compileSections(sectionsData) {
    return sectionsData.map((section) => {
      const { name } = section;
      return (
        <Section
          key={name}
          data={section}
          updateSectionItems={this.updateSectionItems}
        />
      );
    });
  }

  updateSectionItems = (sectionName, newItem) => {
    this.setState((prevState) => {
      console.log({ prevState, sectionName, newItem });
      return {
        ...prevState,
        sections: prevState.sections.map((section) =>
          section.name === sectionName
            ? {
                ...section,
                items: this.updateItems(section.items, newItem),
              }
            : section
        ),
      };
    });
  };

  updateItems = (items, newItem) => {
    const itemExists = items.some((item) => item.id === newItem.id);
    return itemExists
      ? items.map((item) => (item.id === newItem.id ? newItem : item))
      : items.concat(newItem);
  };

  render() {
    console.log({ STATE: this.state });
    const { basicInfo, sections } = this.state;
    const compiledSections = this.compileSections(sections);
    return (
      <main className='page'>
        <Header data={basicInfo} />
        {compiledSections}
      </main>
    );
  }
}
