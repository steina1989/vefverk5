import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
          <Link to={e.link}>{e.name}</Link>
        </li>
      )})


    return (
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          {urls}
        </ul>
      </nav>
    );
  }
}
