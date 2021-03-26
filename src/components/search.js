import React from 'react';

class Search extends React.Component {
            state = { inputFields: [],
            searchedResults: []
        };

      handleClick = () => {
        this.setState(prevState => ({
            inputFields: [this.state.inputFieldValue, ...prevState.inputFields]
          }))
      }

      getInput = (event) => {
        this.setState({
            inputFieldValue: event.target.value
          });  
          this.setState({
            searchedResults: this.state.searchedResults.filter((item => item == event.target.value))
          });

      }


      deleteItems = (items) => {
        this.setState({
            inputFields: this.state.inputFields.filter((item => item !== items))
          });
      }

    render() {
        console.log("test", this.state.searchedResults)
      return (
       <div>
           <input value={this.state.inputFieldValue}onChange={this.getInput}/>
           <button onClick={this.handleClick}>To Do</button>
           {this.state.inputFields !== undefined ? <ul>
          {this.state.inputFields.map((item, i) => (
            <li key={item[i]}>{item} <button onClick={() => this.deleteItems(item)}>Delete</button></li>
          ))}
        </ul> : ""}

       </div>

      )
    }
  }

  export default Search;