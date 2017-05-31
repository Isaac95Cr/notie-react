import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import AsideNotes from './../AsideNotes/AsideNotes';
import AddPanel from './../AddPanel/AddPanel';
import { SlidePanel, Directions } from './../SlidePanel/SlidePanel';
import './MainSection.scss'

const MainSection = ({ isAsideVisible, isAddTagsVisible, isAddNoteBooksVisible,notes, notebooks, tags })=>{
    return (
      <main className='main-section'>
        <div className="panel-container container-fluid">
          <EditorPanel />
          <SlidePanel component={(notebooks) => <AddPanel items={notebooks}  header={"Notebooks"}/> } direction={Directions.Left} isActive={isAddNoteBooksVisible} />
          <SlidePanel component={() => <AddPanel items={tags} header={"Tags"}/> } direction={Directions.Left} isActive={isAddTagsVisible} />
          <SlidePanel component={() => <AsideNotes notes={notes} notebooks={notebooks} tags={tags}/>} direction={Directions.Right} isActive={isAsideVisible} />
        </div>
      </main>
  );
}

export default MainSection;
