import React from "react";

interface UserInfoPopoverProps {
  name: string;
  email: string;
}

export const UserInfoPopover: React.FC<UserInfoPopoverProps> = ({
  name,
  email,
}) => {
  return (
    <div className="absolute right-0 top-full mt-2 z-50">
      <div className="bg-gray-100 rounded-lg px-4 py-3 shadow-lg min-w-[200px]">
        <p className="text-base font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600 mt-1">{email}</p>
      </div>
    </div>
  );
};

