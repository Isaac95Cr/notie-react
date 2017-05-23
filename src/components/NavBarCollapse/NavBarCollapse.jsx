import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard'

class NavBarCollapse extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const { notebooks, tags } = this.props;
    return(
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
            <button type="" className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i></button>
          </div>
        </form>
        <Dashboard notebooks={notebooks} tags={tags}/>
      </div>
    )
  }
}
export default NavBarCollapse;
