import React from 'react';
import img1 from '../containers/images/img1.jpg';
const Check = () => {
  return <div className='container'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={{"height":83+"px"}}>
  {/* style="
    height: 83px; */}
    <div className="carousel-item active">
        <div className="row">
            <div className="col">
            <img src={img1} className="d-block w-100" style={{"height":308+"px"}} alt="..."/>
            </div>
            <div className="col">
            <img src={img1} className="d-block w-100" style={{"height":308+"px"}} alt="..."/>
            </div>
            <div className="col">
            <img src={img1} className="d-block w-100" style={{"height":308+"px"}} alt="..."/>
            </div>
            <div className="col">
            <img src={img1} className="d-block w-100" style={{"height":308+"px"}}  alt="..."/>
            </div>
        </div>
      
    </div>
    <div className="carousel-item">
    <div className="row">
            <div className="col">
            <img src={img1} className="d-block w-100" style={{"height":308+"px"}}  alt="..."/>
            </div>
            <div className="col">
            <img src={img1} className="d-block w-100" style={{"height":308+"px"}} alt="..."/>
            </div>
            <div className="col">
            <img src={img1} className="d-block w-100" style={{"height":308+"px"}} alt="..."/>
            </div>
            <div className="col">
            <img src={img1} className="d-block w-100" style={{"height":308+"px"}} alt="..."/>
            </div>

        </div>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>;
};

export default Check;
