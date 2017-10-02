import React, { Component } from 'react'
import '../styles/thronepedianav.css';
export default class ThronepediaNav extends Component {
  render() {
    return (

<nav className="navbar navbar-expand-lg thronepedia-nav text-justify text-center text-white">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-white text-justify " href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-justify" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-justify" href="/thonepedia/house">Houses</a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white text-justify" href="/characters">Characters</a>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}
