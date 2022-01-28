import React, { Component } from "react";
import Section from "./Section";
import Entry from "./Entry";
import { exampleData } from "../example_data";
import templates from "./itemTemplates";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { item: exampleData.profile };
  }
  content = (
    <Entry
      description={this.item.description}
    />
  );
  render() {
    return <Section title='Profile' content={this.content} />;
  }
}
