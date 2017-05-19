import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import AsideNotes from './../AsideNotes/AsideNotes';
import './MainSection.scss';

const MainSection = () => {
  return (
    <main className='main-section'>
      <div className="panel-container">
        <EditorPanel />
        <AsideNotes />
      </div>
    </main>
  );
};

export default MainSection;
