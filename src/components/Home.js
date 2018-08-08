import React from 'react';
import Searcher from './Searcher';
import People from './People';
import '../styles/Home.css';

class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1 className="title">Harry Potter Characters</h1>
          <Searcher saveInput={this.props.saveInput} character={this.props.character}/>
        </div>
        <People charactersFromAPI={this.props.charactersFromAPI} character={this.props.character} />
      </React.Fragment>
      );
  }
}

export default Home;
