import React, { Component, PropTypes } from 'react';
import marked from 'marked'

function renderHTML(userInput) {
  var previewWindow = document.getElementById('previewWindow');
  previewWindow.innerHTML(marked(userInput));
}

export default class MarkdownPreview extends Component {
  render() {
    return (
      <div id="previewWindow" dangerouslySetInnerHTML={{__html: marked(this.props.userInput)}}>
      </div>
    );
  }
}

MarkdownPreview.propTypes = {
  userInput: PropTypes.string.isRequired
}
