import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard'

const NavBarCollapse = ({ notebooks, tags, onSearch}) => {
  return (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" onChange={onSearch} />
        </div>
      </form>
      <Dashboard notebooks={notebooks} tags={tags}/>
    </div>
  )
}

export default NavBarCollapse;
