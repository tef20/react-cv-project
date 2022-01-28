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

function genID(lastID) {
  // check for uniqueness / existing ID's in local storage
  let id = lastID || -1;
  function newID() {
    return ++id;
  }
  return { newID };
}

export { capitalize, barSeperatedList, genID };
