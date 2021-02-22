import React from "react";

// import ReactDOM from "react-dom";

// import "./styles.css";

const demos = {
  forest:
  '<iframe src="https://www.globalforestwatch.org/map/?mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9&map=eyJkYXRhc2V0cyI6W3siZGF0YXNldCI6InBvbGl0aWNhbC1ib3VuZGFyaWVzIiwibGF5ZXJzIjpbImRpc3B1dGVkLXBvbGl0aWNhbC1ib3VuZGFyaWVzIiwicG9saXRpY2FsLWJvdW5kYXJpZXMiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX0seyJkYXRhc2V0IjoidHJlZS1jb3Zlci1nYWluIiwibGF5ZXJzIjpbInRyZWUtY292ZXItZ2Fpbi0yMDAxLTIwMTIiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX0seyJkYXRhc2V0IjoidHJlZS1jb3Zlci1sb3NzIiwibGF5ZXJzIjpbInRyZWUtY292ZXItbG9zcyJdLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJ0aW1lbGluZVBhcmFtcyI6eyJzdGFydERhdGUiOiIyMDAxLTAxLTAxIiwiZW5kRGF0ZSI6IjIwMTQtMTItMzEiLCJ0cmltRW5kRGF0ZSI6IjIwMTktMTItMzEifX0seyJkYXRhc2V0IjoidHJlZS1jb3ZlciIsImxheWVycyI6WyJ0cmVlLWNvdmVyLTIwMDAiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX1dfQ%3D%3D&mapMenu=eyJkYXRhc2V0Q2F0ZWdvcnkiOiJjbGltYXRlIn0%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InN1YnNjcmliZVRvQXJlYSJ9&menu=eyJkYXRhc2V0Q2F0ZWdvcnkiOiJmb3Jlc3RDaGFuZ2UiLCJtZW51U2VjdGlvbiI6ImRhdGFzZXRzIn0%3D"item-align="center" width="1400" height="750" style="min-width:500px; min-height: 400px; border: 2px solid #0f5c6e;"/>'
  
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function Globalforestwatch() {
  return (
    <div className="stars">
      {/* <h1>Lets start exploring</h1> */}
      {/* <Iframe iframe={demos["solar"]} allow="autoplay" />, */}
      <h3></h3>
      
      <Iframe iframe={demos["forest"]} allow="autoplay" />,
      <h6>* Credit to Global Forest Watch</h6>
    </div>
    
  );
  // <Link to="/ThreeHome">
  //                   <button className="submittedButton"
  //                   type="submit">
  //                   Back to Home
  //                   </button>
  //               </Link>
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default Globalforestwatch;