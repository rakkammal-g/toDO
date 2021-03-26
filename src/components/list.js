import React  from "react";
import "../App.css";

class List extends React.Component {
  state = {
    searchText: "",
    disabled: true,
    list: [],
  };

  // Search Text Change 
  onSearchTextChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  // To add the list items in add button click
  onListAdd = () => {
    if (this.state.searchText) {
      this.setState((prevState) => ({
        list: [this.state.searchText, ...prevState.list],
        searchText: "",
        disabled: false,
      }));
    }
  };

    // To Delete list items 
  onListDelete = (selectedItem) => {
    this.setState({
      list: this.state.list.filter((item) => item !== selectedItem),
    });
  };

  render() {
    return (
      <div style={{"marginTop": "20px"}}>
        <input
          className="input"
          type="text"
          value={this.state.searchText}
          onChange={this.onSearchTextChange}
        />
        <button
          onClick={this.onListAdd}
          disabled={!this.state.disabled}
        >
          Add
        </button>
        <ul>
          {this.state.list
            .filter((item) => item.includes(this.state.searchText))
            .map((item, i) => (
              <li className="list-name" key={i}>
                <span>{item}</span>
                <button
                  className="button remove"
                  onClick={() => this.onListDelete(item)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default List;
