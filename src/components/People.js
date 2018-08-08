import React from 'react';
import { Link } from 'react-router-dom';

class People extends React.Component {
  render() {
    return (
      <ul className="ul">
         {
          this.props.charactersFromAPI.filter(item => {
            return item.name.toLowerCase().includes(this.props.character);
          })
          .map(characterData =>
            <Link to={`/character/${characterData.id}`}>
              <li className="list" key={characterData.id}>
                <h2 className="name">{characterData.name}</h2>
                <img src={characterData.image} alt="poster"  className="poster"/>
                <p className="house">{characterData.house}</p>
              </li>
            </Link>
          )
        }
      </ul>
      );
  }
}

export default People;
