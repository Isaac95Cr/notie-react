import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import AsideNotes from './../AsideNotes/AsideNotes';
import AddPanel from './../AddPanel/AddPanel';
import { SlidePanel, Directions } from './../SlidePanel/SlidePanel';
import './MainSection.scss'

const MainSection = ({ isAsideVisible, isAddTagsVisible, isAddNoteBooksVisible, notes, notebooks, tags }) => {
  const { Right, Left } = Directions
  return (
    <main className='main-section'>
      <div className="panel-container container-fluid">
        <EditorPanel />
        <SlidePanel direction={Left} isActive={isAddNoteBooksVisible} >
          <AddPanel items={notebooks}  header={"Notebooks"}/>
        </SlidePanel>
        <SlidePanel direction={Left} isActive={isAddTagsVisible} >
          <AddPanel items={tags} header={"Tags"}/>
        </SlidePanel>
        <SlidePanel direction={Right} isActive={isAsideVisible} >
          <AsideNotes notes={notes} notebooks={notebooks} tags={tags}/>
        </SlidePanel>
      </div>
    </main>
  );
}

export default MainSection;
