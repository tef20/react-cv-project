import React from "react";

export default function ExampleToggle(props) {
  return (
    <label id='exampleToggleLabel' htmlFor='exampleDataToggle'>
      <span>Use Example Data:</span>
      <input
        type='checkbox'
        name='exampleDataToggle'
        id='exampleDataToggle'
        checked={props.checkValue}
        onChange={props.handleClick}
      />
    </label>
  );
}
