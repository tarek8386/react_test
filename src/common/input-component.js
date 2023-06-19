import React, { Component } from "react";
class Input extends Component {
  render() {
    const { type, value, onChange,id } = this.props;

    return (
      <input
        type={type}
        onChange={onChange}
        className="form-control"
        id={id}
        value={value}
      />
    );
  }
}

export default Input;
