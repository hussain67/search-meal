import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useGlobalContext } from "../context";

const SearchByName = () => {
  const [myOptions, setMyOptions] = useState([]);
  let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
  const { setSearchTerm } = useGlobalContext();
  const [userInput, setUserInput] = useState("Dessert");

  useEffect(() => {
    const getDataFromAPI = () => {
      fetch(`${url}${userInput}`)
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(res => {
          let options = [];
          for (var i = 0; i < res.meals.length; i++) {
            options.push(res.meals[i].strMeal);
          }
          setMyOptions(options);
        });
    };
    getDataFromAPI();
  }, [url, userInput]);

  return (
    <div style={{ marginLeft: "40%", marginTop: "60px" }}>
      <h3>Enter Your Favourate meal</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        //autoComplete
        autoHighlight
        options={myOptions}
        onSelect={e => {
          setSearchTerm(e.target.value);
        }}
        onChange={e => {
          setUserInput(e.target.value);
        }}
        renderInput={params => <TextField {...params} variant="outlined" label="Search Box" />}
      />
    </div>
  );
};

export default SearchByName;
