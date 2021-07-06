import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const [meals, setmeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [httpError, sethttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://eighth-jigsaw-278110-default-rtdb.firebaseio.com/meals.json');

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      const responseData = await response.json();

      const loaderMeals = [];

      for (const key in responseData) {
        loaderMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      setmeals(loaderMeals);
      setisLoading(false);
    }

    fetchMeals().catch((error) => {
      setisLoading(false);
      sethttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
