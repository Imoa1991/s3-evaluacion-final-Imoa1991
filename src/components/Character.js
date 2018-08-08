import React from 'react';
import People from './People';

class Character extends React.Component {

  getAlive(alive) {
    if (alive === true){
      return <p className="alive">Estado: Vivo</p>
    } else {
      return <p className="alive dead">Estado: Muerto</p>
      }
    }
  render() {
    return (
    <React.Fragment>
      <ul>
        <li className="list" key={this.props.charactersFromAPI.id}>
          <h2 className="name">{this.props.charactersFromAPI[this.props.match.params.id].name}</h2>
          <img src={this.props.charactersFromAPI[this.props.match.params.id].image} alt="poster"  className="poster"/>
          <p className="house">{this.props.charactersFromAPI[this.props.match.params.id].house}</p>
          <p className="birthday">{this.props.charactersFromAPI[this.props.match.params.id].dateOfBirth}</p>
          {this.getAlive(this.props.charactersFromAPI[this.props.match.params.id].alive)}
          <p className="patronus">{this.props.charactersFromAPI[this.props.match.params.id].patronus}</p>
        </li>
      </ul>
    </React.Fragment>
      );
  }
}

export default Character;
