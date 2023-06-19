import React, { Component } from 'react'
class Header extends Component {
  state = {  } 
  render() { 
    return (
      <div className="d-flex justify-content-center card-header text-success">
      <h2>{this.props.text}</h2>
    </div>
    );
  }
}
 
export default Header;

