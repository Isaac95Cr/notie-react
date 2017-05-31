import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import AsideNotes from './../AsideNotes/AsideNotes';
import AddPanel from './../AddPanel/AddPanel';
import { SlidePanel, Directions, Panels } from './../SlidePanel/SlidePanel';
import './MainSection.scss'

const MainSection = ({ visiblePanel, notes, notebooks, tags })=>{
    return (
      <main className='main-section'>
        <div className="panel-container container-fluid">
          <EditorPanel />
          <SlidePanel direction={Directions.Left} visiblePanel={visiblePanel} panel={Panels.Notebooks}>
            <AddPanel items={notebooks}  header={"Notebooks"}/>
          </SlidePanel>
          <SlidePanel direction={Directions.Left} visiblePanel={visiblePanel} panel={Panels.Tags}>
            <AddPanel items={tags} header={"Tags"}/>
          </SlidePanel>
          <SlidePanel direction={Directions.Right} visiblePanel={visiblePanel} panel={Panels.Notes}>
            <AsideNotes notes={notes} notebooks={notebooks} tags={tags}/>
          </SlidePanel>
        </div>
      </main>
  );
}

export default MainSection;
