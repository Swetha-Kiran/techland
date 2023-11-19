import React from 'react';
import DashboardSidebar from './dashboardSidebar';

const SidebarLayout = ({ children }) => {
  return (
    <div className="flex h-[calc(100vh-70px)]">
      <div className=''>
        <DashboardSidebar />
      </div>
      <div className="flex-grow overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
