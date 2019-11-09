import React, { Component } from "react";

import Ninjas from "./Ninja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 45, belt: "black", id: 1 },
      { name: "Yoshi", age: 34, belt: "green", id: 2 },
      { name: "crystal", age: 45, belt: "green", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>My first React app </h1>
        <p>Welcome: )</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
