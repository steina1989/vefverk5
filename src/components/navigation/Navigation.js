import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './Navigation.css';



export default class Navigation extends Component { 

  constructor(props) {
    super(props)
    this.state ={
      urls : []
    }
  }

  componentDidMount() {
    const api = process.env.REACT_APP_SERVICE_URL;
    fetch(api).then(resp => resp.json()).then(data =>{
      this.setState({urls : data.schools})
    })
  }

  render() {

    const urls = this.state.urls.map((e,index)=>{
      return (
        <li key={index}>
          <NavLink to={e.link} activeclassname="active">{e.name}</NavLink>
        </li>
      )})


    return (
      <nav className="navigation">
        <h1>Próftöflur</h1>
          <ul>
            <li>
              <NavLink exact to="/" activeclassname="active"> Home</NavLink>
            </li>
            {urls}
          </ul>
      </nav>
    );
  }
}
