import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {index: 0};
  }

  click(index, event){
    this.setState({index: index});
  }



  render(){
    return (
      <div>
        <ul className="tab-header">
          {this.props.tabs.map((el, idx) => <li className={ this.state.index === idx ? 'active' : '' } onClick={this.click.bind(this, idx)} key={idx}><h1>{el.title}</h1></li>)}
        </ul>
        <article className="tab-content"><p>{this.props.tabs[this.state.index].content}</p></article>
      </div>
    )
  }
}

export default Tabs;
