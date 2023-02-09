import React, { Component } from "react";

class App extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL + "/image.png"})`,
      height: "100vh",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div style={myStyle}>
        <h1>GeeksForGeeks</h1>
      </div>
    );
  }
}

export default App;
