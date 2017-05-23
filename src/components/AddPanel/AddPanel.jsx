import React from 'react';
import AddSearchList from './../AddSearchList/AddSearchList';
import './AddPanel.scss';

const items = [
  {name: 'You'},
  {name: 'me'},
  {name: 'us'}
]

const AddPanel = () => {
  return (
    <div className="row">
        <div className="add-panel-container">
            <div className="col-xs-12">
                <div className="add-panel">
                  <AddSearchList header="Notebooks" searchPlaceholder="Look into your dreams..." items={items}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPanel;
