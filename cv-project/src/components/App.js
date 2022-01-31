import React, { Component } from "react";
import BasicInfo from "./BasicInfo";
import Subsection from "./Subsection2";
import { exampleData } from "../data/example_data";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      importExampleData: true,
    };
  }

  render() {
    const { importExampleData } = this.state;

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
        />
        <Subsection
          id={"employment"}
          title={"Employment"}
          type='list'
          importData={importExampleData ? exampleData["employment"] : null}
        />
        <Subsection
          id={"projects"}
          title={"Projects"}
          type='list'
          importData={importExampleData ? exampleData["projects"] : null}
        />
      </main>
    );
  }
}
