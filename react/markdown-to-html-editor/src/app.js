import React, { Component } from 'react';
import './app.css';

import InputArea from './components/inputarea/inputarea.component';
import MarkdownArea from './components/markdown/markdown.component'

export default class App extends Component {
  render () {
    return (
      <div>
        <InputArea></InputArea>
        <MarkdownArea></MarkdownArea>
      </div>
    )
  }
}
