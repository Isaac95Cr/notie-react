import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import NoteView from './../NoteView/NoteView';
import PropertyView from './../PropertyView/PropertyView';
import { SlidePanel, Directions, Panels } from './../SlidePanel/SlidePanel';
import './MainSection.scss'

const MainSection = ({ visiblePanel, notes, notebooks, tags, onNoteSearch, onTagSearch, onNotebookSearch, allTags, allNotebooks, onAddNote }) => {
    const { Right, Left } = Directions;
    const { Tags, Notebooks, Notes } = Panels;
    return (
      <main className='main-section'>
        <div className="panel-container container-fluid">
          <EditorPanel addNote={onAddNote}/>
          <SlidePanel direction={Left} visiblePanel={visiblePanel} panel={Notebooks}>
            <PropertyView items={notebooks} header={"Notebooks"} onSearch={onNotebookSearch} />
          </SlidePanel>
          <SlidePanel direction={Left} visiblePanel={visiblePanel} panel={Tags}>
            <PropertyView items={tags} header={"Tags"} onSearch={onTagSearch} />
          </SlidePanel>
          <SlidePanel direction={Right} visiblePanel={visiblePanel} panel={Notes}>
            <NoteView notes={notes} notebooks={allNotebooks} tags={allTags} onSearch={onNoteSearch} />
          </SlidePanel>
        </div>
      </main>
  );
}

export default MainSection;
