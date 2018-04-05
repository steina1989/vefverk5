import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Department.css';


export default class Department extends Component { 

  static propTypes = {
    visible: PropTypes.bool,
    tests: PropTypes.arrayOf(PropTypes.shape({
      course: PropTypes.string,
      name: PropTypes.string,
      students: PropTypes.number,
      date: PropTypes.string,
    })).isRequired,
    openDepartmentHandler: PropTypes.func
}

  render() { 
    const { visible, tests,heading, openDepartmentHandler,id } = this.props;
    const openSign = visible ? '- ' : '+ '
    const examElements = tests.map((e,index) => {
      return (
        <tr key={index}>
          <td>{e.course}</td>
          <td>{e.name}</td>
          <td>{e.students}</td>
          <td>{e.date}</td>
        </tr>
      )
    })
    return (
      <section className="department">
        <h1 onClick={e => openDepartmentHandler(id,e)}>
         {openSign}{heading}
        </h1>
        { visible && (
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
        )}
        <hr/>
      </section>
    );
  }
}
