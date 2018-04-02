import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Home.css';

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      min : 0,
      max : 0,
      numTests : 0,
      averageStudents : 0,
      numStudents : 0
    }
  }

  componentDidMount() {
    const api = process.env.REACT_APP_SERVICE_URL+"stats";
    fetch(api).then(resp => resp.json()).then(data =>{
      this.setState({...data.stats})
    })
  
  }

  render() {

    const {min,max,numTests,averageStudents, numStudents} = this.state;

    return (
      <div className="home">
        <Helmet title="Stats" />
        <h1>Tölfræði</h1>
        <p>Min: {min}</p>
        <p>Max: {max}</p>
        <p>Number of tests: {numTests}</p>
        <p>Number of Students: {numStudents}</p>
        <p>Average number of Students: {averageStudents}</p>
      </div>
    );
  }
}
