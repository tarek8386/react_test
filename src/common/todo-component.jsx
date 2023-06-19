import React, { Component } from 'react'
import Button from './button-component';
class Todos extends Component {
    render() { 
        return (
            <div className="card-body text-center">
                 <div className="d-flex m-1 p-2  text-white justify-content-center">
            <h3 className="text-dark">{this.props.todo}</h3>

            <Button text="Edit" className="btn btn-primary rounded-2 mx-2" />

            <Button text="Delete" className="btn btn-danger rounded-2" />
          </div>
            </div>
           
        );
    }
}
 
export default Todos;