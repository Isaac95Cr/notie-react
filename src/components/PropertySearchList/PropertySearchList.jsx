import React from 'react';
import './PropertySearchList.scss';

const renderItems = (items) => {
  return items.map((item, index) => {
    return (
      <li key={index}>
        {item.name}
      </li>
    )
  })
}

const AddSearchList = ({header, searchPlaceholder, items, onSearch}) => {
  return (
    <div className="property-search-list">
      <h3>{header}</h3>
      <div className="search-list-input">
        <input type="text" placeholder={searchPlaceholder} onChange={onSearch}/>
      </div>
      <div className="search-list">
        <ul>
          {renderItems(items)}
        </ul>
      </div>
    </div>
  )
}

export default AddSearchList;
