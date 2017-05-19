import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import AsideNotes from './../AsideNotes/AsideNotes';
import './MainSection.scss';

const MainSection = ({ isAsideVisible }) => {
  return (
    <main className='main-section'>
      <div className="panel-container">
        <EditorPanel />
        <AsideNotes isAsideVisible = {isAsideVisible}/>
      </div>
    </main>
  );
};

export default MainSection;
