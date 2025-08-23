import React from "react";
import Hero from "../components/common/Hero";
import RecipeList from "../components/recipie/RecipeList";
import FeaturedRecipe from "../components/common/FeaturedRecipe";
import InstagramSubscribe from "../components/common/InstagramSubscribe"; // removed trailing space

const Recipe = () => {
  return (
    <>
      <Hero
        bgImage={`${import.meta.env.BASE_URL}assets/hero-bg.jpg`} // GitHub Pages compatible
        heading="Our Recipes"
        subheading="Explore our delicious starters, breakfast, lunch, dinner, and desserts"
      />
      <RecipeList />
      <FeaturedRecipe />
      <InstagramSubscribe />
    </>
  );
};

export default Recipe;
