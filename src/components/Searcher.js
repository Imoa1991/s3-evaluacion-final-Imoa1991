import React from 'react';

class Searcher extends React.Component {

  render() {
    return (
      <React.Fragment>
        <label htmlFor="personajes"></label>
        <input id="personaje" className="personajes" placeholder="Harry Potter" type="text" onChange={this.props.saveInput} character={this.props.character} />
      </React.Fragment>
      );
  }
}

export default Searcher;
