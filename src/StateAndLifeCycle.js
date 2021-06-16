import React from "react";
// import PropsSample from "./Props";

class StateAndLifeCycle extends React.Component {
  state = {
    count: 0
  }

  add = () => {
    // this.setState({count:this.state.count+1});
    this.setState(current => ({count:current.count+1}));
  };
  minus = () => {
    this.setState(current => ({count:current.count-1}));
  };

  render(){
    console.log("I'm rendering!");
    return (
      <div>
        <h1>I am a class component: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("Component rendered! mounted!");
  }

  componentDidUpdate() {
    console.log("I just updated!");
  }

  componentWillUnmount() {
    console.log("Goodbye.... unmounted!");
  }
}

export default StateAndLifeCycle;
