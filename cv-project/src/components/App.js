import React, { Component } from "react";
import BasicInfo from "./BasicInfo";
import Subsection from "./Subsection";
import { exampleData } from "../data/example_data";
import PopupOverlay from "./PopupOverlay";
import ExampleToggle from "./ExampleToggle";
import { toggleState } from "./tools";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      importExampleData: true,
      showPopup: false,
      popupContent: null,
    };
    this.toggleState = toggleState.bind(this);
  }

  togglePopup = (content) => {
    this.setState({ showPopup: !!content, popupContent: content ?? null });
  };

  render() {
    const { importExampleData } = this.state;

    return (
      <main className='page'>
        <ExampleToggle
          checkValue={importExampleData}
          handleClick={() => this.toggleState("importExampleData")}
        />
        {/* <BasicInfo togglePopup={(formContent) => this.togglePopup(formContent)} /> */}
        <Subsection
          id={"basicInfo"}
          title={"Basic Info"}
          type='header'
          importData={importExampleData ? exampleData["basicInfo"] : null}
          togglePopup={(formContent) => this.togglePopup(formContent)}
        />
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
    ); 
  }
}
