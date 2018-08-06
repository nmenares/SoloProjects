import React from 'react'
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  render(){
    return (
      <div>{
            if(this.props.user){
              <h1>Welcome, {this.props.user.username}</h1>
              <button onClick={()=>this.props.logOut()}>Log Out</button>
              }else{
                <Link to="/signup">SigUp</Link>
                <Link to="/login">Log In</Link>         
              }
            }
      </div>
    )
  }
}

export default  Greeting;
