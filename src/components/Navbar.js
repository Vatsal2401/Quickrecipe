import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

export default function Navbar(props) {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location]);
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push("/Login")
  }
  return (
    <>
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark z-index-1">

          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/SearchRecipe" ? "active" : ""}`} aria-current="page" to="/SearchRecipe"><i class="fa-solid fa-magnifying-glass"></i></Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Catogory" ? "active" : ""}`} to="/Catogory">Category</Link>
                </li>
                {/* <li className="nav-item">
                  {localStorage.getItem('token') ? <Link className={`nav-link ${location.pathname === "/Profile" ? "active" : ""}`} aria-current="page" to="/Profile"><i class="fa-solid fa-gauge"></i></Link> : <Link className="nav-link disabled " aria-current="page" to="/Profile">USER DASH</Link>}
                </li> */}
                {/* <li className="nav-item dropdown">
                  <Link className={`nav-link  dropdown-toggle `} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ManageRecipe
                  </Link>
                  <ul className="d-grid gap-2 d-md-flex justify-content-md-end navbar-nav  mb-2 mb-lg-0">
                
              </ul>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ zIndex: 10000 }}>
                    <li><Link className="dropdown-item" to="/NutrtionCalc">AddRecipe</Link></li>
                    <li><Link className="dropdown-item" to="/CreateRecipe">UpdateRecipe</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Userprofile">user</Link></li>
                  </ul>
                </li> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Features
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ zIndex: 10000 }}>
                    <li><Link className="dropdown-item" to="/NutrtionCalc">Nutrition calculator</Link></li>
                    <li><Link className="dropdown-item" to="/CreateRecipe">CreateRecipe</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Catogory">Check page</Link></li>
                  </ul>
                </li>

              </ul>


              <ul className="d-grid gap-2 d-md-flex justify-content-md-end navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  {localStorage.getItem('token') ? <Link className={`nav-link ${location.pathname === "/Profile" ? "active" : ""}`} aria-current="page" to="/Profile"><i class="fa-solid fa-gauge"></i></Link> : <Link className="nav-link disabled " aria-current="page" to="/Profile"><i class="fa-solid fa-gauge"></i></Link>}
                </li>
                <li className="nav-item">
                  {localStorage.getItem('token') ? <Link className={`nav-link ${location.pathname === "/Userprofile" ? "active" : ""}`} aria-current="page" to="/Userprofile"><i class="fa-solid fa-user"></i></Link> : <Link className="nav-link disabled " aria-current="page" to="/Userprofile"><i class="fa-solid fa-user"></i></Link>}
                </li>

              </ul>

              {!localStorage.getItem('token') ? <ul className="d-grid gap-2 d-md-flex justify-content-md-end navbar-nav  mb-2 mb-lg-0"><li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Login" ? "active" : ""}`} aria-current="page" to="/Login">Login</Link>
              </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/SignUp" ? "active" : ""}`} aria-current="page" to="/SignUp">SignUp</Link>
                </li></ul> : <button className='btn btn-dark' onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i></button>}


            </div>
          </div>
        </nav>
      </div>


    </>
  )
}

