import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import School from './components/school';
import Navigation from './components/navigation';
import NotFound from './components/not-found';

class App extends Component {

  constructor(props) {
    super(props)
    this.state ={
      schools : []
    }
  }

  componentDidMount() {
    const api = process.env.REACT_APP_SERVICE_URL;
    fetch(api).then(resp => resp.json()).then(data =>{
      this.setState({schools : data.schools})
    })
  }

  render() {

    const schoolRoutes = this.state.schools.map((e,index) =>{
      return <Route key={index} exact path={e.link} component={School} />
    })

    return (
      <main className="app">
      <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          {schoolRoutes}
          <Route path="*" component={NotFound}/>
        </Switch>
      </main>
    );
  }
}

export default App;
