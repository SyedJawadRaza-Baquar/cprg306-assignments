"use client";
import { useState } from "react";
import { useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;   
    } catch (error) {
        console.error("Error: ", error);
    }
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    const loadMealIdeas = async () => {
        const response = await fetchMealIdeas(ingredient);
        setMeals(await response);
    }
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);
    return (
        <div className="flex flex-wrap">
        <h2>Meal Ideas</h2>
        {meals === null ? (<p>Select an ingredient to see meal ideas</p>
        ) : (
            <ul>
            {meals.map((meal) => (
                <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
            </ul>
        )}
        </div>
    );
}