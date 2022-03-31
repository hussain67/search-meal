import React, { useState, createContext, useContext, useEffect, useCallback } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);

  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      let response = await fetch(`${url}${searchTerm}`);
      let data = await response.json();
      // console.log(data);
      let { meals } = data;
      if (meals) {
        const newMeals = meals.map(meal => {
          const { idMeal, strMeal, strArea, strMealThumb } = meal;

          return {
            id: idMeal,
            name: strMeal,
            catagory: strArea,
            thumb: strMealThumb
          };
        });
        //console.log(newMeals);
        setMeals(newMeals);
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (error) {
      //console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchMeals();
  }, [searchTerm, fetchMeals]);

  return <AppContext.Provider value={{ loading, searchTerm, meals, setSearchTerm }}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
