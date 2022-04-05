import React from "react";
import { useParams } from "react-router-dom";
import SingleMeal from "../components/SingleMeal";

const SingleMealPage = () => {
  const { id } = useParams();
  return (
    <>
      <SingleMeal id={id} />
    </>
  );
};

export default SingleMealPage;
