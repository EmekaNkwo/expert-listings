"use client";

import React from "react";
import { UserAvatar } from "./UserAvatar";
import {
  CalculatorIcon,
  CalendarIcon,
  ShoppingBagIcon,
  WalletIcon,
  SearchIcon,
} from "../../shared/components/HeaderIcons";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    initial: string;
    name: string;
    email: string;
  };
  onCalculatorClick?: () => void;
  onCalendarClick?: () => void;
  onSearchClick?: () => void;
  onWalletClick?: () => void;
  onBuildingClick?: () => void;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  user,
  onCalculatorClick,
  onCalendarClick,
  onSearchClick,
  onWalletClick,
  onBuildingClick,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-primary">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <UserAvatar
              initial={user.initial}
              name={user.name}
              email={user.email}
            />
            <div className="mt-3">
              <p className="text-sm font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="text-xs text-gray-600">{user.email}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  onCalculatorClick?.();
                  onClose();
                }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <CalculatorIcon size={24} stroke="#52525B" />
                <span className="text-sm font-medium text-gray-900">
                  Budgeting
                </span>
              </button>
              <button
                onClick={() => {
                  onCalendarClick?.();
                  onClose();
                }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <CalendarIcon size={24} stroke="#52525B" />
                <span className="text-sm font-medium text-gray-900">
                  Calendar
                </span>
              </button>
              <button
                onClick={() => {
                  onSearchClick?.();
                  onClose();
                }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <SearchIcon size={24} stroke="#52525B" />
                <span className="text-sm font-medium text-gray-900">
                  Search Activity
                </span>
              </button>
              <button
                onClick={() => {
                  onWalletClick?.();
                  onClose();
                }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <WalletIcon size={24} stroke="#52525B" />
                <span className="text-sm font-medium text-gray-900">Wallet</span>
              </button>
              <button
                onClick={() => {
                  onBuildingClick?.();
                  onClose();
                }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <ShoppingBagIcon size={24} stroke="#52525B" />
                <span className="text-sm font-medium text-gray-900">
                  Building
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

