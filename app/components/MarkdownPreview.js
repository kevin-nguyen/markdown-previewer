import React, { Component, PropTypes } from 'react';
import  marked from 'marked'

export default class MarkdownPreview extends Component {
  render() {
    return (
      <div>
        {marked(this.props.userInput)}
      </div>
    );
  }
}

MarkdownPreview.propTypes = {
  userInput: PropTypes.string.isRequired
}
