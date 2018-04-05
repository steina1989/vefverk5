import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Department.css';


export default class Department extends Component {

  constructor(props){
    super(props)
    this.state = {
      visible : props.visible,
      department : props.department
    }
  }

  render() {
    const { visible, department } = this.state;

    const exams = visible ? department.tests : [];

    const examElements = exams.map(e => {
      return (
        <tr>
          <td>{e.course}</td>
          <td>{e.name}</td>
          <td>{e.students}</td>
          <td>{e.date}</td>
        </tr>
      )
    })
    return (
      <section className="department">
        <h1>{department.heading}</h1>
         <table>
           <tbody>
             <tr>
             <th>Auðkenni</th>
             <th>Heiti námskeiðs</th>
             <th>Fjöldi nemanda</th>
             <th>Dagsetning</th>
            </tr>
            {examElements}
          </tbody>
        </table> 
      </section>
    );
  }
}
