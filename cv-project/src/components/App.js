import React, { Component } from "react";
import BasicInfo from "./BasicInfo";
import Subsection from "./Subsection2";
import { exampleData } from "../data/example_data";
import PopupOverlay from "./PopupOverlay";
import EntryForm from "./EntryForm";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      importExampleData: true,
      showPopup: false,
      popupContent: null,
    };
  }

  togglePopup = (content) => {
    console.log(content);
    this.setState({ showPopup: !!content, popupContent: content ?? null });
  };

  render() {
    const { importExampleData } = this.state;
    console.log(this.state);

    return (
      <main className='page'>
        {/* 
        TODO: 
        <ExampleDataToggle /> 
        */}
        <label id='exampleToggleLabel' htmlFor='exampleDataToggle'>
          <span>Use Example Data:</span>
          <input
            type='checkbox'
            name='exampleDataToggle'
            id='exampleDataToggle'
            checked={this.state.importExampleData}
            onChange={() =>
              this.setState((prevState) => ({
                importExampleData: !prevState.importExampleData,
              }))
            }
          />
        </label>
        <BasicInfo />
        <Subsection
          id={"profile"}
          title={"Profile"}
          type='simple'
          importData={importExampleData ? exampleData["profile"] : null}
          togglePopup={(formContent) => this.togglePopup(formContent)}
        />
        <Subsection
          id={"employment"}
          title={"Employment"}
          type='list'
          importData={importExampleData ? exampleData["employment"] : null}
          togglePopup={(formContent) => this.togglePopup(formContent)}
        />
        <Subsection
          id={"projects"}
          title={"Projects"}
          type='list'
          importData={importExampleData ? exampleData["projects"] : null}
          togglePopup={(formContent) => this.togglePopup(formContent)}
        />
        {this.state.showPopup && (
          <PopupOverlay
            content={this.state.popupContent}
            togglePopup={() => this.togglePopup()}
          />
        )}
      </main>
    ); //
  }
}
