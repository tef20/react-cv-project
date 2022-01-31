function capitalize(string) {
  return (
    string
      .split(" ")
      // ignore error from whitespace
      .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
      .join(" ")
  );
}

function barSeperatedList(...argsList) {
  // ignores falsey values
  return argsList.filter((elem) => elem).join(" | ");
}

function genID(keyword, lastID) {
  // check for uniqueness / existing ID's in local storage
  let id = lastID || -1;
  function newID() {
    return `${keyword ?? ''}${++id}`;
  }
  return { newID };
}

function toggleState(key, value) {
  this.setState((prevState) => ({
    [key]: value ?? !prevState[key],
  }));
}

export { capitalize, barSeperatedList, genID, toggleState };
