import React, { Component } from "react";
import { genID } from "./tools";

export default class Subsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.ids = genID();
  }

  mapItemsWithIds(itemsArr) {
    return itemsArr.map((newItem) => {
      const newItemId = `${this.props.id}${this.ids.newID()}`;
      return {
        ...newItem,
        id: newItem.id || newItemId,
      };
    });
  }

  

  componentDidMount() {
    this.setState({
      items: this.props.importData
        ? this.mapItemsWithIds(this.props.importData)
        : [],
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.importData !== this.props.importData) {
      console.log(prevProps.importData, this.props.importData);
      console.log("componentUpdate");
      this.setState({
        items: this.props.importData
          ? this.mapItemsWithIds(this.props.importData)
          : [],
      });
    }
  }

  render() {
    return (
      <section className={`section ${this.props.id}`}>
        {JSON.stringify(this.state)}
        <p>hello</p>
      </section>
    );
  }
}
