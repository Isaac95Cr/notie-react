import React from 'react';
import './AddPanel.scss';

const AddPanel = ({ isAddPanelVisible }) => {
  return (
    <div className="row">
        <div className={`tags-and-notebooks-container ${ (isAddPanelVisible ? 'active-left' : '') }`}>
            <div className="col-xs-12">
                <div className="tags-and-notebooks">
                   <h1> {isAddPanelVisible} asdasd</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPanel;
