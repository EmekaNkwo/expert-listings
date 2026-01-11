"use client";

import React from "react";
import { PropertyList } from "./components/PropertyCarousel";
import { usePropertyListings } from "./hooks/usePropertyListings";

export const PropertyListings: React.FC = () => {
  const { properties } = usePropertyListings();

  return <PropertyList properties={properties} />;
};
