import React, { Component } from 'react'
import "./Tour.sass"

export default class Tour extends Component {
 render() {
  return (
   <article className="tour">
    <div className="img-container">
     <img
      src="https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
      alt=""
     />
     <span className="close-btn">
      <i className="fas fa-window-close"></i>
     </span>
     </div>
     <div className="tour-info">
      <h3>city</h3>
      <h4>name</h4>
      <h5>info 
       <span>
        <i className="fas fa-caret-square-down"></i>
       </span>
      </h5>
      <p>Lorem ipsum dolor, sit amet 
       consectetur adipisicing elit.</p>
     </div>
   </article>
  )
 }
}