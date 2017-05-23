import React from 'react';
import ListItem from '../../components/ListItem/ListItem';

const renderItems = (items) => {
  return items.map((item, index) => {
    return <ListItem key={index} title={item.name} />
  })
}

const ListContainer = ({title, items}) =>{
    return (
        <div className="list">
            <h3 className="list-title">{title}</h3>
            <div className="list-content">
                {renderItems(items)}
            </div>
        </div>
    )
}

export default ListContainer;
