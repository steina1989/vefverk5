import React, { Component } from 'react';
import PropTypes from 'prop-types';
import path from 'path';
import Helmet from 'react-helmet';
import './School.css';

export default class School extends Component {

  constructor(props){
    super(props)
    this.state = {
      school : null
    }
  }

  componentDidMount(){
    const {url} = this.props.match;
    const api = path.join(process.env.REACT_APP_SERVICE_URL,url);
    fetch(api).then(resp => resp.json()).then(data =>{
      this.setState({school : data.school})
    })
  }

  render() {

    if (!this.state.school) return <h1>Sæki gögn...</h1>

    

    return (
      <section className="school">
        <Helmet title={this.state.school.heading} />
        <h1>{this.state.school.heading}</h1>

      </section>
    );
  }
}
