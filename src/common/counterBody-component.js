import React, { Component } from "react";
import Button from "./button-component";

class CounterBody extends Component {
  render() {
    return (
      <div className="card-body text-center">
        <div className="d-flex m-1 p-2  text-white justify-content-center">
          <Button
            className="btn btn-warning p-3 rounded-5 m-2"
            text="Reset"
            event={() => this.props.onReset(this.props.index)}
          />

          <Button
            text="-"
            className="btn btn-dark p-4 rounded-4 m-2"
            disabled={this.props.number === 0}
            event={() => this.props.onDecrement(this.props.index)}
          />

          <p className="p-3 ">{this.props.number}</p>

          <Button
            text="+"
            className="btn btn-primary p-4 rounded-4 m-2"
            event={() => this.props.onIncrement(this.props.index)}
          />

          <Button
            className="btn btn-danger p-3 rounded-5 m-2"
            text="Delete"
            event={() => this.props.onDelete(this.props.index)}
          />
        </div>
      </div>
    );
  }
}

export default CounterBody;
