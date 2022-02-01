import React from "react";

export default function SectionHeader(props) {
  return (
    <div className='section--header'>
      {props.title && <h2 className='section--header-title'>{props.title}</h2>}
      {(props.type === "list" || !props.items.length) && (
        <button
          className={`section--header-add ${
            props.hideAddButton ? "hidden" : ""
          }`}
          type='button'
          onClick={() => props.handleAddItem()}
        >
          ➕
        </button>
      )}
    </div>
  );
}
