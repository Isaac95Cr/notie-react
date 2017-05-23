import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import AsideNotes from './../AsideNotes/AsideNotes';
import AddPanel from './../AddPanel/AddPanel';
import { SlidePanel, Directions } from './../SlidePanel/SlidePanel';
import './MainSection.scss';

const MainSection = ({ isAsideVisible, isAddPanelVisible }) => {
  return (
    <main className='main-section'>
      <div className="panel-container container-fluid">
        <EditorPanel />
        <SlidePanel component={AddPanel} direction={Directions.Left} isActive={isAddPanelVisible} />
        <SlidePanel component={AsideNotes} direction={Directions.Right} isActive={isAsideVisible} />
      </div>
    </main>
  );
};

export default MainSection;
