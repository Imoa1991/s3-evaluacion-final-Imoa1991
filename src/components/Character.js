import React from 'react';
import '../styles/Character.css';
import gryffindor from '../images/gryffindor.png';
import hufflepuff from '../images/hufflepuff.png';
import ravenclaw from '../images/ravenclaw.png';
import slytherin from '../images/slytherin.png';
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
  getHouse(house) {
    if(house === 'Gryffindor') {
      return  <img className="shield" src={gryffindor} alt="Gryffindor"/>
    } else if(house === 'Hufflepuff') {
      return  <img className="shield" src={hufflepuff} alt="Hufflepuff"/>
    } else if(house === 'Ravenclaw') {
      return  <img className="shield" src={ravenclaw} alt="Revenclaw"/>
    } else if (house === 'Slytherin'){
      return  <img className="shield" src={slytherin} alt="Slytherin"/>
    }
  }
  render() {
    return (
      <React.Fragment>
        <Link className="link" to='/' >
        <button className="buttomHome">Home</button>
      </Link>
      <div className="card__container">
        <div className="card__image-container" style={{backgroundImage:` url(${this.character.image})`}} title="Character card image">
          <img src={this.character.image} alt="poster"  className="card__poster"/>
        </div>
        <div className="card_details">
          <h2 className="card__name">{this.character.name}</h2>
          <p className="card__house">Casa: {this.character.house}</p>
          <p className="card__birthday">Brithday: {this.character.dateOfBirth}</p>
          <p className="card__patronus">Patronus: {this.character.patronus}</p>
          {this.getAlive(this.character.alive)}
          {this.getHouse(this.character.house)}
        </div>
      </div>
    </React.Fragment>
  );
}
}

export default Character;
