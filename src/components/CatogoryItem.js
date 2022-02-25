import React from 'react';
import img1 from '../containers/images/vats.jpg';
export default function (props) {
  return <div>
      <div className="card bg-dark text-white">
  <img src={img1} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 ><a className="nav-link active text-white" aria-current="page" href="/">{props.CatogoryName}</a></h5>
    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
  </div>;
}
