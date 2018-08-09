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
      return <p className="card__alive dead">Estado: Muerto <span role="img" aria-label="dead">💀</span></p>
    }
  }
  render() {
    return (
      <React.Fragment>
        <Link className="link" to='/' >
        <button className="buttomHome">Home</button>
      </Link>
      <ul className="card_container">
        <li className="card_list" key={this.character.id}>
          <img src={this.character.image} alt="poster"  className="card__poster"/>
          <div className="card_details">
            <h2 className="card__name">{this.character.name}</h2>
            <p className="card__house">Casa: {this.character.house}</p>
            <p className="card__birthday">Brithday: {this.character.dateOfBirth}</p>
            <p className="card__patronus">Patronus: {this.character.patronus}</p>
            {this.getAlive(this.character.alive)}

          </div>
        </li>
      </ul>
    </React.Fragment>
  );
}
}

export default Character;
