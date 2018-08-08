import React from 'react';
import '../styles/Searcher.css';
class Searcher extends React.Component {

  render() {
    return (
      <React.Fragment>
        <label htmlFor="personajes"></label>
        <input id="personaje" className="personajes" placeholder="Harry Potter" type="text" onChange={this.props.saveInput} />
      </React.Fragment>
      );
  }
}

export default Searcher;
