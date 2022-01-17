import React, { Component } from "react";
import { exampleData } from "../example_data";
import Section from "./Section";
import Entry from "./Entry";
import Header from "./Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: {...exampleData} };
  }

  // addToSection(sectionName) {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     [sectionName]: "hello",
  //   }));
  // }

  compileSections(data) {
    return data.map((section) => {
      const sectionName = Object.keys(section)[0];
      const content = this.unpackEntries(section[sectionName]);
      return <Section title={this.capitalize(sectionName)} content={content} />;
    });
  }

  unpackEntries(entryData) {
    return Array.isArray(entryData)
      ? entryData.map((item) => {
          return this.unpackEntries(item);
        })
      : this.renderEntry(entryData);
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

  renderEntry(entry) {
    // TODO think about coupling and direction of data from forms to page
    const { startDate, endDate, description, descriptor, ...rest } = entry;
    return (
      <Entry
        startDate={startDate}
        endDate={endDate}
        description={description}
        descriptor={descriptor}
        summaryDetails={rest}
      />
    );
  }

  render() {
    const { candidate, sections } = this.state.data;
    const compiledSections = this.compileSections(sections)
    return (
      <main className='page'>
        <Header data={candidate} />
        {compiledSections}
      </main>
    );
  }
}
