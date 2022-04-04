import React from "react";
import MealList from "../components/MealList";
import SearchByCategory from "../components/SearchByCategory";

const Home = () => {
  return (
    <div>
      <SearchByCategory />
      <MealList />
    </div>
  );
};

export default Home;
