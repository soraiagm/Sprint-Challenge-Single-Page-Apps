import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("");

  useEffect(() => {
    const getCharacters = () => {
    Axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.results);
          const data = response.data.results.filter(character =>
            character.name.toLowerCase().includes(search.toLowerCase())
            );
          setCharacters(data);
        })
        .catch(error => {
          console.log("Characters were not retried", error);
        });
      }
      getCharacters();
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  return (
    <section className="character-list">
      <SearchForm handleInputChange = {handleInputChange} />
      <div className="characters">
          {characters.map(character => (
            <Link to={`/characters/${character.id}`}>
              <CharacterCard key={character.id} character={character}
                image={character.image}
                name={character.name}
                gender={character.gender}
                species={character.species}/>
            </Link>
          ))}
      </div>
    </section>
  );
}
