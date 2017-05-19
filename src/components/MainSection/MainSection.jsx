import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import AsideNotes from './../AsideNotes/AsideNotes';
import './MainSection.scss';

const MainSection = ({ visible }) => {
  return (
    <main className='main-section'>
      <div className="panel-container">
        <EditorPanel />
        <AsideNotes visible = {visible}/>
      </div>
    </main>
  );
};

export default MainSection;
