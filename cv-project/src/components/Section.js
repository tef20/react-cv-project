import React, { Component } from "react";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }
  
  toggleHidden = (e) => {
    this.setState((prevState) => ({ hidden: !prevState.hidden }));
  };

  render() {
    return (
      <section
        className='section'
        onMouseEnter={this.toggleHidden}
        onMouseLeave={this.toggleHidden}
      >
        <div className='section--header'>
          <h2 className='section--header-title'>{this.props.title}</h2>
          <button
            className={`section--add ${this.state.hidden ? "hidden" : ""}`}
            type='button'
          >
            ➕
          </button>
        </div>
        <div className='section--content'>{this.props.content}</div>
      </section>
    );
  }
}
