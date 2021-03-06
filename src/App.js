import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Character from './components/Character';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      character:'',
      charactersFromAPI: [],
      house:''
    }
    this.search=this.search.bind(this);
    this.saveInput=this.saveInput.bind(this);
    this.filterHouse=this.filterHouse.bind(this);
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

  filterHouse(e) {
      const resultado = e.currentTarget.value;
      this.setState({
        house: resultado
      });
    }
  search(){
    fetch('https://hp-api.herokuapp.com/api/characters')
    .then(response => {
      return response.json();
    })
    .then(apiResponse => {
      let newDataApi = [];
      for (var i = 0; i < apiResponse.length; i++) {
        newDataApi[i] = {...apiResponse[i],id:i};
      }
      this.setState({
        charactersFromAPI: newDataApi
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() =>
            <Home search={this.search} saveInput={this.saveInput} character={this.state.character} charactersFromAPI={this.state.charactersFromAPI} house={this.state.house} filterHouse={this.filterHouse}/>
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
