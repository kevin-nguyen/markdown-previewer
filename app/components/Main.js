import React, { Component } from 'react';
import Header from './Header'
import MarkdownInput  from './MarkdownInput'
import MarkdownPreview from './MarkdownPreview'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {userInput: ""};
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <MarkdownInput onUserInput={this.handleUserInput} />
            </div>
            <div className='col-sm-6'>
              <MarkdownPreview userInput={this.state.userInput} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
