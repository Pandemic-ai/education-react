import React, { Component } from "react";

export class TutorialDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      justdemo: ""
    };
  }

  async componentDidMount() {
    const res = await fetch(`https://simpleisbestt.herokuapp.com/api/sib`);
    const justdemo = await res.json();
    console.log(justdemo);
    this.setState({
      justdemo
    });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default TutorialDetails;
