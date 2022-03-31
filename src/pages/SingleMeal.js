import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

function SingleMeal() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchMeal() {
      try {
        let response = await fetch(`${url}${id}`);
        let data = await response.json();
        if (data.meals) {
          const { idMeal: id, strMeal: name, strCategory: category, strArea: origin, strMealThumb: image, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = data.meals[0];

          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];

          const newMeal = { name, category, origin, image, id, instructions, ingredients };
          setMeal(newMeal);
        } else {
          setMeal(null);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchMeal();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!meal) {
    return <h1>Theere is no mill available for your search</h1>;
  } else {
    return (
      <section className="center">
        <Link to="/">
          <button className="btn">Back Home </button>
        </Link>
        <h2>{meal.name}</h2>
        <div className="single-meal">
          <img className="single-meal-img" src={meal.image} alt="" />
          <div>
            <p>
              <span className="single-meal-data">Name :</span>
              {meal.name}
            </p>
            <p>
              <span className="single-meal-data">Category :</span>
              {meal.category}
            </p>
            <p>
              <span className="single-meal-data">Origin :</span>
              {meal.origin}
            </p>
            <p>
              <span className="single-meal-data">Ingredients :</span>
              {meal.ingredients.map((item, index) => {
                return item ? (
                  <span className="single-meal-ingredient" key={index}>
                    {item},{" "}
                  </span>
                ) : null;
              })}
            </p>
            <p>
              <span className="single-meal-data">Instructions :</span>
              {meal.instructions}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SingleMeal;
