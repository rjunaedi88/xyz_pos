import React, { Component } from 'react'
import './Style.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <h2>xyz<span>POS</span></h2>
        <nav>
            <ul>
                <li><a href="">Fitur</a></li>
                <li><a href="">Berlangganan</a></li>
            </ul>
            <button className="nav-button">Masuk</button>
        </nav>
      </div>
    )
  }
}
