import React from 'react';
import './Dashboard.scss';
import ListContainer from '../../components/ListContainer/ListContainer';

const Dashboard = () => {
  return (
     <div className="dashboard">
        <ListContainer />
        <ListContainer />
     </div>    
  );
};

export default Dashboard;
