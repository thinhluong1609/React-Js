import React, { Component } from 'react';

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { name: '' };

  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSignUp() {
    if (this.state.name.trim().length !== 0) {

      alert(`Welcome aboard, ${this.state.name}!`);
    }


  }

  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>   Sign Me Up!  </button>
      </Dialog>
    );
  }
}

export default SignUpDialog;