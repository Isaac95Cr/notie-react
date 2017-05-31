import React from 'react';
import PropertySearchList from './../PropertySearchList/PropertySearchList';
import './PropertyView.scss';

const AddPanel = ({ header, items, onSearch }) => {
  return (
    <div className="row">
      <div className="property-view-container">
        <div className="col-xs-12">
          <div className="property-view">
            <PropertySearchList
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
