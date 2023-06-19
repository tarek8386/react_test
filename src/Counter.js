import React, { Component } from "react";
import Header from "./common/header-component";
import CounterBody from "./common/counterBody-component";
import Button from "./common/button-component";

class Counter extends Component {
  state = {
    number: [0]
  };
  constructor(){
    super();
    console.log("firrst");
  }

  addCounter = () => {
    this.setState({ number: [...this.state.number, 0] });
  
  };

  increment = (index) => {
    const number = [...this.state.number];
    number[index]++;
    this.setState({ number });
    console.log("third");
  };

  componentDidMount() {  console.log("third"); }
  componentDidUpdate() {  console.log("second updatew");}

  decrement = (index) => {
    const number = [...this.state.number];
    number[index]--;
    this.setState({ number });
  };

  delete = (index) => {
    const number = [...this.state.number];
    number.splice(index, 1);
    this.setState({ number });
  };

  reset = (index) => {
    const number = [...this.state.number];
    number[index] = 0;
    this.setState({ number });
  };
  render() {
    console.log("second");
    return (
      <div className="container bg-info card">
        <Header 
        text="Counter App"
        />
        <Button
          className="btn btn-success mt-2 d-flex-center"
          text="Add new counter"
          event={this.addCounter}
        />
        <hr></hr>

        {this.state.number.map((number, index) => {
          return (
            <React.Fragment key={index}>
            <CounterBody
                onDelete={this.delete}
                index={index}
                number={this.state.number[index]}
                onIncrement={this.increment}
                onDecrement={this.decrement}
                onReset={this.reset}
              />
              <hr/>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Counter;
