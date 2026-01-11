"use client";

import React from "react";
import { OverviewCard } from "../listings-overview/components/OverviewCard";
import { useUsersOverview } from "./hooks/useUsersOverview";
import { Icon } from "../shared/components/Icon";

export const UsersOverview: React.FC = () => {
  const { metrics, handleViewAll } = useUsersOverview();

  return (
    <OverviewCard
      title="Users Overview"
      icon={
        <Icon size={28} className="text-accent">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </Icon>
      }
      metrics={[
        { label: "Total", value: metrics.total },
        { label: "Riders", value: metrics.riders },
        { label: "Subscribers", value: metrics.subscribers },
      ]}
      onViewAll={handleViewAll}
    />
  );
};
