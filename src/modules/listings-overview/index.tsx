"use client";

import React from "react";
import { OverviewCard } from "./components/OverviewCard";
import { useListingsOverview } from "./hooks/useListingsOverview";
import { Icon } from "../shared/components/Icon";

export const ListingsOverview: React.FC = () => {
  const { metrics, handleViewAll } = useListingsOverview();

  return (
    <OverviewCard
      title="Listings Overview"
      icon={
        <Icon size={28} className="text-accent">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </Icon>
      }
      metrics={[
        { label: "Total", value: metrics.total },
        { label: "Active", value: metrics.active },
        { label: "Archived", value: metrics.archived },
      ]}
      onViewAll={handleViewAll}
    />
  );
};
