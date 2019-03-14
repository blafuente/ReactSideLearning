import React from "react";
import ReactDOM from "react-dom"

function Person(props) {
    return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>My Age: {props.age} </p>
      </div>
    );
  }
  
  var app = (
    <div>
      <Person name="Brian" age="30" />
      <Person name="Khanh" age="28" />
      <Person name="Brandon" age ="23"/>
    </div>
   );
  
  ReactDOM.render(app,document.querySelector('#app'));

