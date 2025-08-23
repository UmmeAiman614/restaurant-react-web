import React from "react";

import Hero from "../components/common/Hero";
import Menu from "../components/common/Menu";
import OverlayMenu from "../components/menu/OverlayMenu";
import GridMenu from "../components/menu/GridMenu";
import TileMenu from "../components/menu/TileMenu";
import InstagramSubscribe from "../components/common/InstagramSubscribe ";
const MenuPage = () => {
  // Sample menu items dataset
  const menuItems = [
  {
    name: "English Asparagus",
    desc: "Asparagus, hens egg, toasted sunflower seed",
    price: 14.95,
    category: "Starters",
    img: `${import.meta.env.BASE_URL}assets/menu1.jpg`,
  },
  {
    name: "Avocado Toast",
    desc: "Sourdough, avocado, feta cheese",
    price: 12.95,
    category: "Breakfast",
    img: `${import.meta.env.BASE_URL}assets/menu2.jpg`,
  },
  {
    name: "Grilled Chicken Salad",
    desc: "Fresh greens, grilled chicken, vinaigrette",
    price: 16.95,
    category: "Lunch",
    img: `${import.meta.env.BASE_URL}assets/menu3.jpg`,
  },
  {
    name: "Steak with Herbs",
    desc: "Grilled steak, rosemary, garlic butter",
    price: 22.95,
    category: "Dinner",
    img: `${import.meta.env.BASE_URL}assets/menu4.jpg`,
  },
  {
    name: "Chocolate Cake",
    desc: "Rich chocolate cake with ganache",
    price: 8.95,
    category: "Desserts",
    img: `${import.meta.env.BASE_URL}assets/menu5.jpg`,
  },
  {
    name: "Pancakes",
    desc: "Stack of pancakes with maple syrup",
    price: 10.95,
    category: "Breakfast",
    img: `${import.meta.env.BASE_URL}assets/menu6.jpg`,
  },
];


  return (
    <>
      <Hero
        bgImage={`${import.meta.env.BASE_URL}assets/hero-bg.jpg`} // GitHub Pages compatible
        heading="Our Menu"
        subheading="Explore our delicious starters, breakfast, lunch, dinner, and desserts"
      />
      <Menu />

      {/* Overlay Style Menu */}
      <OverlayMenu menuItems={menuItems} />

      {/* Grid Style Menu */}
      <GridMenu menuItems={menuItems} />

      {/* Tile Style Menu */}
      <TileMenu menuItems={menuItems} />

      <InstagramSubscribe />
    </>
  );
};

export default MenuPage;
