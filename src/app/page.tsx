import React from "react";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Hero2 from "@/components/Hero2";
import DontMissPage from "@/components/DontMiss";
import EssentialsPage from "@/components/Essentials";
import LinksPage from "@/components/Links";
import GearUpPage from "@/components/GearUp";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Hero2 />
      <GearUpPage />
      <DontMissPage />
      <EssentialsPage />
      <LinksPage />
    </div>
  );
};

export default Homepage;
