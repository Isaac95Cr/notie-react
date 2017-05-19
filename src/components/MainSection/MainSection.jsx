import React from 'react';
import AsideNotes from '../../components/AsideNotes/AsideNotes';

const MainSection = (props) => {
  return (
    <main>
      <AsideNotes visible = {props.visible}/>
    </main>
  );
};

export default MainSection;
