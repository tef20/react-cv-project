import React, { Component } from "react";
import templates from "../data/itemTemplates";
import EntryForm from "./EntryForm";
import Entry from "./EntryWrapper";
import SectionHeader from "./SectionHeader";
import { genID, toggleState } from "./tools";

export default class Subsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideAddButton: true,
      items: [],
      idUnderEdit: null,
    };
    this.ids = genID(this.props.id);
    this.toggleState = toggleState.bind(this);
  }

  toggleHideAddButton = (hidden) => {
    this.toggleState("hideAddButton", hidden);
  };

  callFormPopup = (itemId) => {
    const { togglePopup, title, id } = this.props;
    togglePopup(
      <EntryForm
        formHeader={title}
        itemId={itemId}
        itemTemplate={templates[id]}
        formSubmitHandler={this.handleFormSubmit}
        togglePopup={this.toggleFormPopup}
        existingEntry={this.state.items.find((item) => item.id === itemId)}
      />
    );
  };

  handleAddItem = () => {
    const newId = this.ids.newID();
    this.callFormPopup(newId);
  };

  handleFormSubmit = (e, itemId, item) => {
    e.preventDefault();
    if (this.state.items.some((item) => item.id === itemId)) {
      this.editItem(itemId, item);
    } else {
      this.addItem(item, itemId);
    }
    this.props.togglePopup();
  };

  addItem = (item, id) => {
    item["id"] = id;
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  removeItem = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  editItem = (id, newItem) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) => (item.id === id ? newItem : item)),
    }));
  };

  mapItemsWithIds = (itemsArr) => {
    return itemsArr.map((newItem) => {
      const newItemId = this.ids.newID();
      return {
        ...newItem,
        id: newItem.id || newItemId,
      };
    });
  };

  componentDidMount() {
    this.setState({
      items: this.props.importData
        ? this.mapItemsWithIds(this.props.importData)
        : [],
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.importData !== this.props.importData) {
      this.setState({
        items: this.props.importData
          ? this.mapItemsWithIds(this.props.importData)
          : [],
      });
    }
  }

  render() {
    const { props, state } = this;
    return (
      <section
        className={`section ${props.id}`}
        onMouseOver={() => this.toggleHideAddButton(false)}
        onMouseOut={() => this.toggleHideAddButton(true)}
      >
        {props.type !== "header" && (
          <SectionHeader
            title={props.title}
            type={props.type}
            items={state.items}
            hideAddButton={state.hideAddButton}
            handleAddItem={this.handleAddItem}
          />
        )}
        {state.items.length ? (
          <div className='section--content'>
            {state.items.map((item) => (
              <Entry
                key={item.id}
                section={props.id}
                item={item}
                onEdit={() => this.callFormPopup(item.id)}
                onRemove={
                  props.type === "list"
                    ? () => this.removeItem(item.id)
                    : undefined
                }
              />
            ))}
          </div>
        ) : (
          <p className='faded'>{`${props.title} details go here...`}</p>
        )}
      </section>
    );
  }
}
