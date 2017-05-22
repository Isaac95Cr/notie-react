import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import AsideNotes from './../AsideNotes/AsideNotes';
import AddPanel from './../AddPanel/AddPanel';
import './MainSection.scss';

const MainSection = ({ isAsideVisible, isAddPanelVisible }) => {
  return (
    <main className='main-section container-fluid'>
      <div className="panel-container">
        <EditorPanel />
        <AsideNotes isAsideVisible = {isAsideVisible}/>
        <AddPanel isAddPanelVisible = {isAddPanelVisible}/>
      </div>
    </main>
  );
};

export default MainSection;
