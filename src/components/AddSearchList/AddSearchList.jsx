import React from 'react';

const renderItems = (items) => {
  return items.map((item, index) => {
    return (
      <li key={index}>
        {item.name}
      </li>
    )
  })
}

const AddSearchList = ({header, searchPlaceholder, items}) => {
  return (
    <div className="add-search-list">
      <h3>{header}</h3>
      <div className="sear">
        <input type="text" placeholder={searchPlaceholder} />
      </div>
      <div className="searched-list">
        <ul>
          {renderItems(items)}
        </ul>
      </div>
    </div>
  )
}

export default AddSearchList;
