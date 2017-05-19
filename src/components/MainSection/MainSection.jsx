import React from 'react';
import EditorPanel from './../EditorPanel/EditorPanel';
import './MainSection.scss';

const MainSection = () => {
  return (
    <main className='main-section'>
      <div className="panel-container">
        <EditorPanel />
      </div>
    </main>
  );
};

export default MainSection;
