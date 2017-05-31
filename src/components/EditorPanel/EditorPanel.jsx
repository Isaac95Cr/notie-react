import React from 'react';
import Editor from './../Editor/Editor';
import EditorTools from './../EditorTools/EditorTools';
import api from './../../../api/api';
import './EditorPanel.scss';

class EditorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddNote = this.handleAddNote.bind(this)
    this.handleOnType = this.handleOnType.bind(this)
    this.handleClearEditor = this.handleClearEditor.bind(this)
    this.state = {
      editorText: '',
      editorTitle: '',
      toolButtons: [
        { iconName: 'fa-plus', onClick: this.handleAddNote },
        { iconName: 'fa-times', onClick: this.handleClearEditor }
      ]
    };
  }

  handleOnType(note) {
    this.setState({
      editorText: note.text !== undefined ? note.text : this.state.editorText,
      editorTitle: note.title !== undefined ? note.title : this.state.editorTitle
    })
  }

  handleAddNote() {
    api.saveNote({
      'title': this.state.editorTitle,
      'text': this.state.editorText,
      'notebook': '3',
      'tags': []
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })
  }

  handleClearEditor() {
    this.setState({
      editorText: '',
      editorTitle: ''
    });
  }

  render() {
    const { toolButtons, editorText, editorTitle } = this.state;
    const { handleOnType } = this;
    return (
      <section className = 'editor-panel row'>
        <div className='col-xs-2'>
          <div className='editor-tools-container'>
            <EditorTools buttons={toolButtons} />
          </div>
        </div>
        <div className='col-xs-8'>
          <Editor text={editorText} title={editorTitle} onType={handleOnType} />
        </div>
      </section>
    )
  }
}

export default EditorPanel;
