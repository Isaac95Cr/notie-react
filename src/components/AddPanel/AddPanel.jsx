import React from 'react';
import AddSearchList from './../AddSearchList/AddSearchList';
import api from './../../../api/api';
import './AddPanel.scss';

class AddPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.state = {
      items: [],
      originalItemList: []
    }
  }

  componentDidMount() {
    api.getAllNotes()
    .then(response => {
      const notebooks = response.data.notebooks;
      this.setState({
        items: notebooks,
        originalItemList: notebooks
      });
    });
  }

  handleOnSearch(e) {
    const { originalItemList } = this.state;
    const criteria = e.target.value.toLowerCase();
    const filteredItems = originalItemList.filter((item) => {
      return item.name.toLowerCase().indexOf(criteria) >= 0;
    });
    this.setState({items: filteredItems});
  }

  render() {
    const { items } = this.state;
    return (
      <div className="row">
          <div className="add-panel-container">
              <div className="col-xs-12">
                  <div className="add-panel">
                    <AddSearchList
                      header="Notebooks"
                      searchPlaceholder="Look into your dreams..."
                      items={items}
                      onSearch={this.handleOnSearch}
                    />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default AddPanel;
