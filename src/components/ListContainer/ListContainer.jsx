import React from 'react';
import ListItem from '../../components/ListItem/ListItem';

const ListContainer = () =>{
    return (
        <div className="list">
            <h3 className="list-title">Notas</h3>
            <div className="list-content">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </div>    
    )
}

export default ListContainer;