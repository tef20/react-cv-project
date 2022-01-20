import React, { Component } from "react";
import { exampleData } from "../example_data";
import Section from "./Section";
import Entry from "./Entry";
import Header from "./Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: { ...exampleData } };
  }

  compileSections(sectionsData) {
    return sectionsData.map((section) => {
      const { name } = section;
      const content = <Entry type={section.type} items={section.items} />;
      return <Section key={name} title={this.capitalize(name)} content={content} />;
    });
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

  addToSection(sectionName, item, append = true) {
    this.setState((prevState) => ({
      ...prevState,
      sections: [
        ...prevState.sections.map((section) =>
          section.name === sectionName
            ? {
                ...section,
                items: !!append
                  ? section.list.concat(item)
                  : [item].concat(section.list),
              }
            : section
        ),
      ],
    }));
  }

  render() {
    const { basicInfo, sections } = this.state.data;
    const compiledSections = this.compileSections(sections);
    return (
      <main className='page'>
        <Header data={basicInfo} />
        {compiledSections}
      </main>
    );
  }
}
