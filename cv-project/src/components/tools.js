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

export { capitalize, barSeperatedList };
