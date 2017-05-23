import React from 'react';
import './ListItem.scss';

const ListItem = ({ title }) => {
    return (
      <div className="list-item">
        <h4 className="item-title">{title}</h4>
      </div>
    )
}

export default ListItem;
