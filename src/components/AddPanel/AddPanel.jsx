import React from 'react';
import AddSearchList from './../AddSearchList/AddSearchList';
import api from './../../../api/api';
import './AddPanel.scss';

class AddPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    api.getAllNotes()
    .then(response => {
      const notebooks = response.data.notebooks;
      this.setState({items: notebooks});
    });
  }

  render() {
    const { items } = this.state;
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
}

export default AddPanel;
