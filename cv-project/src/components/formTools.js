function toggleFormPopup(id) {
  this.setState((prevState) => ({
    idUnderEdit: id,
    formPopup: !prevState.formPopup,
  }));
}

function handleFormSubmit(e, itemId, item) {
  e.preventDefault();
  if (this.state.items.some((item) => item.id === itemId)) {
    this.editItem(itemId, item);
  } else {
    this.addItem(item, itemId);
  }
  this.toggleFormPopup();
}

function addItem(newItem, id) {
  newItem["id"] = id; // ?? this.ids.newID();
  this.setState((prevState) => ({
    items: [...prevState.items, newItem],
  }));
}

function editItem(id, newItem) {
  this.setState((prevState) => ({
    items: [
      ...prevState.items.map((item) => (item.id === id ? newItem : item)),
    ],
  }));
}

function removeItem(id) {
  this.setState((prevState) => ({
    items: prevState.items.filter((item) => item.id !== id),
  }));
}

export { toggleFormPopup, handleFormSubmit, addItem, editItem, removeItem };
