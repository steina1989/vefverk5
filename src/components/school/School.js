import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Department from '../department/Department';
import path from 'path';
import Helmet from 'react-helmet';
import './School.css';

export default class School extends Component {

  constructor(props){
    super(props)
    this.state = {
      school : null,
      selectedCourse : null
    }
  }
  
  static propTypes = {
    match: PropTypes.shape({
      url : PropTypes.string.isRequired
    })
  }

  componentDidMount(){
    const { url } = this.props.match;
    const api = path.join(process.env.REACT_APP_SERVICE_URL,url);
    fetch(api).then(resp => resp.json()).then(data =>{
      this.setState({school : data.school})
    }) 
  }

  openDepartmentHandler = (key) =>{
    const selectedCourse = (key === this.state.selectedCourse) ? null : key 
    this.setState({selectedCourse})
  }

  render() {

    if (!this.state.school) return <h1>Sæki gögn...</h1>

    const { departments } = this.state.school;
    const { selectedCourse } = this.state;

    const departmentElements = departments.map((e,index)=> {
      return (<Department key={index} 
        visible={index === selectedCourse} 
        tests={e.tests}
        heading={e.heading}
        id={index}
        openDepartmentHandler={this.openDepartmentHandler}/>);
    })
    return (
      <section className="school">
        <Helmet title={this.state.school.heading} />
        <h1>{this.state.school.heading}</h1>
        {departmentElements}
      </section>
    );
  }
}
