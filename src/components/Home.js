import React from 'react'
import img from '../containers/images/imgr.jpg';
import img1 from '../containers/images/img1.jpg';
import RecipeItemList from './RecipeItemList';
import Chefs from './Chefs';

export default function Home() {
  return (
    <>
      <div className="container">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" style={{ height: 700 + "px" }}>
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="https://source.unsplash.com/random/900×700/?recipe " className="d-block w-100" alt="..."style={{ height: 700 + "px" }} />
              <div className="carousel-caption d-none d-md-block">
                <h5>Search recipe</h5>
                <p>Find  cooking inspiration on Quickrecipes. Discover recipes based on the food you love .</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://source.unsplash.com/random/900×700/?food "  className="d-block w-100" alt="..." style={{ height: 700 + "px" }}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Make your own recipe</h5>
                <p>Inspire other to cook your dish.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?vegan "  className="d-block w-100" alt="..."style={{ height: 700 + "px" }} />
              <div className="carousel-caption d-none d-md-block">
                <h5>Get Nutrition information </h5>
                <p className='d-none'>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />
<hr />
<div className="container d-flex justify-content-center">
<h2>Recommanded Recipe</h2>
</div>
     <RecipeItemList/>
    
      <hr className="featurette-divider"/>
      <div className="container">
      <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="https://source.unsplash.com/random/900×700/?recipe " role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>

      </div>
      <Chefs/>
    </>
  )
}
