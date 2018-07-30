import React from 'react';

class Autocomplete extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputVal: "", names: props.names.slice(0)};
    this.handleChange = this.handleChange.bind(this);
  }

  updateSearch(value) {
    this.setState({
      inputVal: value,
      names: this.props.names.filter((el) => el.toLowerCase().indexOf(value.toLowerCase()) === 0)
    });
  }

  handleChange(event){
    this.updateSearch(event.currentTarget.value);
  }

  handleClick(name, event){
    this.updateSearch(name);
  }

  render(){
    return (
      <div className="box">
        <input type="text" onChange={this.handleChange} value={this.state.inputVal} placeholder="Search..."></input>
        <ul>
          {
            this.state.names.length === 0 ?
            <li>No Results</li> :
            this.state.names.map ((el,idx) => <li onClick={this.handleClick.bind(this,el)} key={idx}>{el}</li> )
          }
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
