import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const SearchByCategory = () => {
  const [myOptions, setMyOptions] = useState([]);
  let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const { loading, setLoading, setSearchTerm } = useGlobalContext();
  const [userInput, setUserInput] = useState("Chicken");

  useEffect(() => {
    async function getMealByCategory() {
      setLoading(true);
      try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        const options = data.categories.map(option => {
          return option.strCategory;
        });
        setMyOptions(options);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getMealByCategory();
  }, [setLoading, url]);

  const handleSelect = e => {
    e.preventDefault();
    setUserInput(e.target.value);
    setSearchTerm(e.target.value);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="page-section">
      <h3 className="page-section-title">Select Your Favourate meal Category</h3>
      <select className="page-section-select" value={userInput} onChange={handleSelect}>
        {myOptions.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SearchByCategory;
