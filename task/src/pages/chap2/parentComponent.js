import React from "react";
import ChildrenComponent from "./childrenComponent";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  handleChange =(name) =>{
    this.setState ({name});
  }
  render() {
    return (
      <div>
        <h4>Chap 2: Props and state: </h4>
        <p>Your name : {this.state.name}</p>
        <ChildrenComponent name={this.state.name} handleChange={this.handleChange} />
      </div>
    );
  }
}
export default Parent;
