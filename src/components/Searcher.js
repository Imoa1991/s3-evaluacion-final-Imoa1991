import React from 'react';
import '../styles/Searcher.css';
class Searcher extends React.Component {

  render() {
    return (
      <React.Fragment>
        <input id="personajes" className="personajes" placeholder="Harry Potter" type="text" onChange={this.props.saveInput} />
        <select name="f_house" id="f_house" onChange={this.props.filterHouse}>
              <option value="">Elige una casa</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Slytherin">Slytherin</option>
        </select>
      </React.Fragment>
    );
  }
}

export default Searcher;
