import React from 'react';
import AddSearchList from './../AddSearchList/AddSearchList';
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
  
  componentWillReceiveProps(props) {
    this.setState({
      items: this.props.notebooks,
      originalItemList: this.props.notebooks
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
