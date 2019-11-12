import React, { Component } from "react";

import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 45, belt: "black", gender: "female", id: 1 },
      { name: "Yoshi", age: 34, belt: "green", gender: "male", id: 2 },
      { name: "crystal", age: 45, belt: "green", gender: "female", id: 3 }
    ]
  };
  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };

  deleteNinja = id => {
    console.log(id);
  };
  render() {
    return (
      <div className="App">
        <h1>My first React app </h1>
        <p>Welcome: )</p>

        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
