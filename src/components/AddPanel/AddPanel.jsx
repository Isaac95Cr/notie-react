import React from 'react';
import AddSearchList from './../AddSearchList/AddSearchList';
import './AddPanel.scss';

const AddPanel = ({ header, items, onSearch }) => {
  return (
    <div className="row">
      <div className="add-panel-container">
        <div className="col-xs-12">
          <div className="add-panel">
            <AddSearchList
              header={header}
              searchPlaceholder="Look into your dreams..."
              items={items}
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPanel;
