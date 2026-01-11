import React from "react";
import { PropertyCard } from "./PropertyCard";

export interface Property {
  id: string;
  title: string;
  badge: string;
  images?: string[];
}

interface PropertyListProps {
  properties: Property[];
}

export const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          title={property.title}
          badge={property.badge}
          images={property.images}
          imageAlt={property.title}
        />
      ))}
    </div>
  );
};
