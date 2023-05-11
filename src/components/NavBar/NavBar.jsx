import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './navbar.css'
import  link, { Link }  from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='menu'>
    <Link className='logo' to="/">Alterego:Gremio de Rol</Link>
          <div className="collapse" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 offset-md-1 py-4">
                <ul className="list-unstyled">
                  <li className="nav-item">
                  <Link className='link' to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='link' to='/productos/ammunition'>Ammunition</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='link' to='/productos/upgrade materials'>Upgrade materials</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='link' to='/productos/weapon'>Weapons</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='link' to='/productos/shield'>Shields</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='link' to='/productos/ranged'>Bows</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark shadow-sm">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className='link' to='/cart'><CartWidget/></Link>
          </div>
        </div>     
    </div>
  )
}
