import React, { Component } from "react";
import { exampleData } from "../example_data";
import Section from "./Section";
import Entry from "./Entry";

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: [...exampleData] };
  }

  addToSection(sectionName) {
    this.setState((prevState) => ({
      ...prevState,
      [sectionName]: "hello",
    }));
  }

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
          return this.renderEntry(item);
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
    const { start, end, title, description } = entry;
    return (
      <Entry
        startDate={start}
        endDate={end}
        title={title}
        description={description}
      />
    );
  }

  render() {
    const { data } = this.state;
    return <main className='page'>{this.compileSections(data)}</main>;
  }
}
