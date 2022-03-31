import React from "react";
import Meal from "./Meal";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const MealList = () => {
  const { meals, loading } = useGlobalContext();
  //console.log(meals, 'Hi')

  if (loading) {
    return <Loading />;
  }
  if (meals.length < 1) {
    return <h2 className="section-title">No Meals matched your criteria</h2>;
  }
  return (
    <section className="seaction-mealList">
      <h1 className="section-title"> Meals</h1>
      <div className="meal">
        {meals.map(meal => {
          return <Meal meal={meal} key={meal.id} />;
        })}
      </div>
    </section>
  );
};

export default MealList;
