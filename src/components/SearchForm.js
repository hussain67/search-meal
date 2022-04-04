import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const [userInput, setUserInput] = useState("");

  const searchMeal = e => {
    e.preventDefault();
    setSearchTerm(userInput);
  };
  return (
    <section className="section-search">
      <form className="search-form" action="" onSubmit={searchMeal}>
        <div className="search-form-control">
          <label htmlFor="name">search your favourate mill</label>
          <input
            value={userInput}
            autoFocus
            type="search"
            id="name"
            onChange={e => {
              setUserInput(e.target.value);
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
