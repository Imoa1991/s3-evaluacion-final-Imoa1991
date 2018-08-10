import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/People.css';

class People extends React.Component {
  getHouse(house) {
    if (house !== ''){
      return <p className="house">{house}</p>
    } else {
      return <p className="house">No tiene casa</p>
    }
  }
  render() {
    return (
      <ul className="peopleContainer">
        {
          this.props.charactersFromAPI.filter(item => {
            return item.name.toLowerCase().includes(this.props.character);
          })
          .filter(item => {
            return item.house.toLowerCase().includes(this.props.house.toLowerCase());
          })
          .map(characterData =>
            <Link className="link" to={`/character/${characterData.id}`} key={characterData.id}>
            <li className="list" key={characterData.id}>
              <div className="image__container" style={{backgroundImage:` url(${characterData.image})`}} title="Character image">
                <img src={characterData.image} alt="poster"  className="poster"/>
              </div>
              <h2 className="name">{characterData.name}</h2>
              {this.getHouse(characterData.house)}
            </li>
          </Link>
        )
      }
    </ul>
  );
}
}

export default People;
