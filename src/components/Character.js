import React from 'react';
import '../styles/Character.css';
import { Link } from 'react-router-dom';

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.character = this.props.charactersFromAPI[this.props.match.params.id];
  }
  getAlive(alive) {
    if (alive === true){
      return <p className="card__alive">Estado: Vivo</p>
    } else {
      return <p className="card__alive--dead">Estado: Muerto <span>💀</span></p>
    }
  }
  render() {
    return (
      <React.Fragment>
        <ul className="card_container">
          <li className="card_list" key={this.character.id}>
            <h2 className="card__name">{this.character.name}</h2>
            <img src={this.character.image} alt="poster"  className="poster"/>
            <p className="card__house">Casa: {this.character.house}</p>
            <p className="card__birthday">Brithday: {this.character.dateOfBirth}</p>
            {this.getAlive(this.character.alive)}
            <p className="card__patronus">{this.character.patronus}</p>
          </li>
        </ul>
        <Link className="link" to='/' >
          <button className="Home">Home</button>
        </Link>
      </React.Fragment>
      );
  }
}

export default Character;
