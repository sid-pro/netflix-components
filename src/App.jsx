import React from "react";
import NetflixSeries from "./components/NetflixSeries";
import "./components/NetflixSeries.css";
const app = () => {
  // this is the jsx code (Javascript XML). it allows to write HTML elements in javascript and place them in DOM
  // without any createElement() and appendChild() methods.
  // return <h1>Hello Siddharth</h1>
  // return React.createElement("h1",null,"Hello Siddharth");

  // multiple elements render
  return (
    <section className="container">
      <h1 className="card-heading">List of Top Netflix series</h1>
      <NetflixSeries />
      {/* <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries /> */}
    </section>
  );
};

export default app;

// in JS
// return React.createElement("h1",null,"Hello Siddharth");   null is props here

// writing HTML in JS is called jsx
