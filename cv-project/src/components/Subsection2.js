import React, { Component } from "react";
import templates from "../data/itemTemplates";
import EntryForm from "./EntryForm";
import Entry from "./EntryWrapper";
import PopupOverlay from "./PopupOverlay";
import { genID } from "./tools";

export default class Subsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideAddButton: true,
      items: [],
      idUnderEdit: null,
      popupOverlay: false,
    };
    this.ids = genID(this.props.id);
  }

  toggleHideAddButton = (hidden) => {
    this.setState((prevState) => ({
      hideAddButton: hidden ?? !prevState.hideAddButton,
    }));
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
    // this.setState((prevState) => ({
    //   idUnderEdit: id ?? null,
    // formPopup: !prevState.formPopup,
    // }));
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
    const { props, state } = this;
    return (
      <section
        className={`section ${props.id}`}
        onMouseOver={() => this.toggleHideAddButton(false)}
        onMouseOut={() => this.toggleHideAddButton(true)}
      >
        <div className='section--header'>
          {props.title && (
            <h2 className='section--header-title'>{props.title}</h2>
          )}
          {(props.type === "list" || !state.items.length) && (
            <button
              className={`section--header-add ${
                state.hideAddButton ? "hidden" : ""
              }`}
              type='button'
              onClick={() => this.handleAddItem()}
            >
              ➕
            </button>
          )}
        </div>
        {state.items?.length ? (
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
        {this.state.formPopup && (
          <PopupOverlay
            content={
              <EntryForm
                formHeader={props.title}
                itemId={state.idUnderEdit}
                itemTemplate={templates[props.id]}
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
      </section>
    );
  }
}
