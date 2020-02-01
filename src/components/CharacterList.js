import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";


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
      console.log("this is the response",response);
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(characters);
  
    });
  }, [query]);

  const handleInputChange = event =>{
    setQuery(event.target.value);
  };

  return (
    <div>
      
      <h2>Search</h2>
      <SearchForm query = {query} handleInputChange = {handleInputChange}/>
      <CharacterCard data = {data}/>
    </div>
  );
}
