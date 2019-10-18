import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.results);
        })
        .catch(error => {
          console.log("Characters were not retried", error);
        })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
