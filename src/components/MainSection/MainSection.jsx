import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import AsideNotes from './../AsideNotes/AsideNotes';
import AddPanel from './../AddPanel/AddPanel';
import { SlidePanel, Directions, Panels } from './../SlidePanel/SlidePanel';
import './MainSection.scss'

const MainSection = ({ visiblePanel, notes, notebooks, tags, onNoteSearch, onTagSearch, onNotebookSearch, allTags, allNotebooks }) => {
    const { Right, Left } = Directions;
    const { Notebooks , Tags , Notes } = Panels;
    return (
      <main className='main-section'>
        <div className="panel-container container-fluid">
          <EditorPanel />
          <SlidePanel direction={Left} visiblePanel={visiblePanel} panel={Panels.Notebooks}>
            <AddPanel
              items={notebooks}
              header={"Notebooks"}
              onSearch={onNotebookSearch}
            />
          </SlidePanel>
          <SlidePanel direction={Left} visiblePanel={visiblePanel} panel={Panels.Tags}>
            <AddPanel
              items={tags}
              header={"Tags"}
              onSearch={onTagSearch}
            />
          </SlidePanel>
          <SlidePanel direction={Right} visiblePanel={visiblePanel} panel={Panels.Notes}>
            <AsideNotes
              notes={notes}
              notebooks={allNotebooks}
              tags={allTags}
              onSearch={onNoteSearch}
            />
          </SlidePanel>
        </div>
      </main>
  );
}

export default MainSection;
