import React from "react";
import Meals from "../components/Meals";
import SearchByCategory from "../components/SearchByCategory";

const Home = () => {
  return (
    <div>
      <SearchByCategory />
      <Meals />
    </div>
  );
};

export default Home;
