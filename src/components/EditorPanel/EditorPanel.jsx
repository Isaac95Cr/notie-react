import React from 'react';
import Editor from './../Editor/Editor';
import EditorTools from './../EditorTools/EditorTools';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import api from './../../../api/api';
import './EditorPanel.scss';

class EditorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddNote = this.handleAddNote.bind(this)
    this.handleOnType = this.handleOnType.bind(this)
    this.handleClearEditor = this.handleClearEditor.bind(this)
    this.clearEditor = this.clearEditor.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.state = {
      editorText: '',
      editorTitle: '',
      isShowingModal: false,
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
      this.props.addNote(res.data);
      this.clearEditor();
      this.setState({isShowingModal: true})
    })
  }

  handleClearEditor() {
    this.clearEditor()
  }

  handleCloseModal() {
    this.setState({isShowingModal: false})
  }

  clearEditor() {
    this.setState({
      editorText: '',
      editorTitle: ''
    });
  }

  render() {
    const { toolButtons, editorText, editorTitle, isShowingModal } = this.state;
    const { handleOnType, handleCloseModal } = this;
    return (
      <section className = 'editor-panel row'>
        <div className='col-xs-2'>
          <div className='editor-tools-container'>
            <EditorTools buttons={toolButtons} />
          </div>
        </div>
        <div className='col-xs-8'>
          {
            isShowingModal &&
            <ModalContainer>
              <ModalDialog>
                <div className="modal-inner">
                  <h4>Yeeey! Note Added!</h4>
                  <button onClick={handleCloseModal}>Cool</button>
                </div>
              </ModalDialog>
            </ModalContainer>
          }
          <Editor text={editorText} title={editorTitle} onType={handleOnType} />
        </div>
      </section>
    )
  }
}

export default EditorPanel;
