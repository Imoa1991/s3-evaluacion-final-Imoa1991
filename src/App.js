import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import People from './components/People';
import Character from './components/Character';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      character:'',
      charactersFromAPI: []
    }
    this.search=this.search.bind(this);
    this.saveInput=this.saveInput.bind(this);
  }

  saveInput(e) {
    const value = e.currentTarget.value.toLowerCase();
    this.setState({
      character: value
    });
  }
componentDidMount(){
  this.search();
}

search(){
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => {
      return response.json();
    })
    .then(apiResponse => {
      let charactersFromAPI = [];
      for (var i = 0; i < apiResponse.length; i++) {
        charactersFromAPI[i] = {...apiResponse[i],id:i};
      }
      this.setState({
        charactersFromAPI: apiResponse
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' render={() =>
               <Home search={this.search} saveInput={this.saveInput} character={this.state.character} charactersFromAPI={this.state.charactersFromAPI}/>
             } />
            <Route path='/character/:id' render={(props) =>
               <Character match={props.match} charactersFromAPI={this.state.charactersFromAPI} character={this.state.character}/>
             } />
          </Switch>
      </div>
    );
  }
}

export default App;
