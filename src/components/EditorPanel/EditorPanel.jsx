import React from 'react';
import Editor from './../Editor/Editor';
import EditorTools from './../EditorTools/EditorTools';
import './EditorPanel.scss';

class EditorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toolButtons: [
        { iconName: 'fa-plus', onClick: this.handleAddNote },
        { iconName: 'fa-times', onClick: this.handleClearEditor }
      ]
    };
  }

  handleAddNote() {
    alert('Adding note!');
  }

  handleClearEditor() {
    alert('Clear editor!');
    // this.setState({
    //   editorText: '',
    //   editorTitle: ''
    // });
  }

  render() {
    const { toolButtons } = this.state;
    return (
      <section className = 'editor-panel row'>
        <div className='col-sm-2 hidden-col-xs'>
          <div className='editor-tools-container'>
            <EditorTools buttons={toolButtons} />
          </div>
        </div>
        <div className='col-sm-8 col-xs-12'>
          <Editor />
        </div>
      </section>
    )
  }
}

export default EditorPanel;
