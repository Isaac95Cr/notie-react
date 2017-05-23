import React from 'react';
import './Dashboard.scss';
import ListContainer from '../../components/ListContainer/ListContainer';

const Dashboard = ({ notebooks, tags }) => {
  return (
     <div className="dashboard">
        <ListContainer title='Notebooks' items={notebooks} />
        <ListContainer title='Tags' items={tags} />
     </div>
  );
};

export default Dashboard;
