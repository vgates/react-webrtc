import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.localVideoRef = React.createRef();
  }
  render() {
    const success = (stream) => {
      this.localVideoRef.current.srcObject = stream;
    };
    const failure = (e) => {
      console.log("getUserMedia Error: ", e);
    };
    //add media constraints
    const constraints = { video: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(success)
      .catch(failure);

    /*success will not be called until getUserMedia returns*/
    // (async () => {
    //   const stream = await navigator.mediaDevices.getUserMedia(constraints);
    //   success(stream);
    // })().catch(failure);

    return (
      <div>
        <video ref={this.localVideoRef} autoPlay></video>
      </div>
    );
  }
}

export default App;
