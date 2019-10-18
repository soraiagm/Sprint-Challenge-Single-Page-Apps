import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
    Axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.results);
          
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log("Characters were not retried", error);
        });
      }
      getCharacters();
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: </h2>
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character}
                image={character.image}
                name={character.name}
                gender={character.gender}
                species={character.species}/>
        ))}
      
      </div>
    </section>
  );
}
