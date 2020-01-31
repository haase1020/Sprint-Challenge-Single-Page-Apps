import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  const [data,setData]= useState([]); // Mandi: added useState
  // TODO: Add useState to track data from useEffect
const [query, setQuery]=useState(""); //Mandi: added useState

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response);
      const characters = response.data.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(characters);
  
    });
  }, [query]);

  const handleInputChange = event =>{
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <form className ='search'>
        <input
          type='text'
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          autoComplete="off"
          />
      </form>
      {data.map(data =>{
        return (
          <div className = "character-list" key={data._id}>

            <h2>{data.name}</h2>
            <h3 className="capital">Status: {data.status}</h3>
            <h3 className="capital">Species: {data.species}</h3>
          </div>
        );
      })}
      
    
    </section>
  );
}
