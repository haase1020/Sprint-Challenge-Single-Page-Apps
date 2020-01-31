import React, { useState } from "react";

export default function SearchForm() {

  return (
    <section className="search-form">
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
     // Add a search form here
    </section>
  );
}

export default SearchForm;