import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useGlobalContext } from "../context";

const SearchByCategory = () => {
  const [myOptions, setMyOptions] = useState([]);
  let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const { setSearchTerm } = useGlobalContext();
  const [userInput, setUserInput] = useState("Miscellaneous");

  const handleInput = e => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSelect = e => {
    e.preventDefault();
    setSearchTerm(userInput);
  };
  useEffect(() => {
    const getDataFromAPI = () => {
      fetch(`${url}`)
        .then(response => {
          //console.log(response.json());
          return response.json();
        })
        .then(res => {
          let options = [];
          for (var i = 0; i < res.categories.length; i++) {
            options.push(res.categories[i].strCategory);
          }
          setMyOptions(options);
        });
    };
    getDataFromAPI();
  }, [url]);

  return (
    <div style={{ marginLeft: "40%", marginTop: "60px" }}>
      <h3>Enter Your Favourate meal</h3>
      <form onSubmit={handleSelect}>
        <Autocomplete style={{ width: 500 }} freeSolo autoComplete autoHighlight options={myOptions} onChange={handleInput} renderInput={params => <TextField {...params} variant="outlined" placeholder="Select Your Food Catagory" disabled />} />
      </form>
    </div>
  );
};

export default SearchByCategory;
