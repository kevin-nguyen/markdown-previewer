import React, { Component } from 'react';

export default class MarkdownInput extends Component {
  render() {
    return (
      <form>
        <div className='form-group'>
          <textarea onChange={this.props.onUserInput} className='form-control' rows="20" autofocus></textarea>
        </div>
      </form>    
    );
  }
}
