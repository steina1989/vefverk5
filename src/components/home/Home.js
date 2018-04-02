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
        <Helmet title="Próftöflur" />
        <h1>Tölfræði</h1>
        <p>Fjöldi prófa: {numTests}</p>
        <p>Heildarfjöldi nemanda: {numStudents}</p>
        <p>Meðalfjöldi nemenda í prófi: {averageStudents}</p>
        <p>Minnsti fjöldi nemenda í prófi: {min}</p>
        <p>Mesti fjöldi nemenda í prófi: {max}</p>
      </div>
    );
  }
}
