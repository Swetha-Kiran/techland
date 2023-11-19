import React from 'react';
import UserDashboardSidebar from '../../../Components/userDashboard/userDashboardSidebar';

const UserDashboardSidebarLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <UserDashboardSidebar />
      <div className="flex-grow bg-[#2a364f] grid place-items-center text-4xl text-white font-semibold overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default UserDashboardSidebarLayout;  