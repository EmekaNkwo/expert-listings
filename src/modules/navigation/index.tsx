"use client";

import React from "react";
import { NavItem } from "./components/NavItem";
import { useNavigation, NavItemType } from "./hooks/useNavigation";
import {
  RequestIcon,
  Briefcase,
  ProfileIcon,
  ApplicationIcon,
  DashboardIcon,
  TasksIcon,
} from "../shared/components/NavIcons";
const navItems: Array<{
  id: NavItemType;
  label: string;
  icon: React.ReactNode;
}> = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: "listings",
    label: "Listings",
    icon: <Briefcase />,
  },
  {
    id: "users",
    label: "Users",
    icon: <ProfileIcon />,
  },
  {
    id: "request",
    label: "Request",
    icon: <RequestIcon />,
  },
  {
    id: "applications",
    label: "Applications",
    icon: <ApplicationIcon />,
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: <TasksIcon />,
  },
];

export const Navigation: React.FC = () => {
  const { activeItem } = useNavigation();

  return (
    <nav className="flex items-center justify-between border-b-2 border-gray-200 bg-gray-50 px-6 py-3">
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          icon={item.icon}
          isActive={activeItem === item.id}
          // onClick={() => setActiveItem(item.id)}
        />
      ))}
    </nav>
  );
};
