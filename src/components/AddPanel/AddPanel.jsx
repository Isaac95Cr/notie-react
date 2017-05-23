import React from 'react';
import AddSearchList from './../AddSearchList/AddSearchList';
import './AddPanel.scss';

const AddPanel = ({ isAddPanelVisible }) => {
  return (
    <div className="row">
        <div className={`add-panel-container ${ (isAddPanelVisible ? 'active-left' : '') }`}>
            <div className="col-xs-12">
                <div className="add-panel">
                  <AddSearchList />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPanel;
