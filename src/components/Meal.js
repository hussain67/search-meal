import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { id, name, catagory, thumb } = meal;
  return (
    <article className="meals-item">
      <img src={thumb} alt="Meal-picture" />
      <div className="meals-item-info">
        <h2>{name}</h2>
        <h3>{catagory}</h3>
        <Link to={`/meal/${id}`}>
          <button className="btn">Details</button>
        </Link>
      </div>
    </article>
  );
};

export default Meal;
