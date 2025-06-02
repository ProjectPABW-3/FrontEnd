import React from 'react';
import SaldoAdmin from './SaldoAdmin';
import UserManagement from './UserManagement';
import MitraManagement from './MitraManagement';
import AvailabilityManagement from './AvailabilityManagement';

const DashboardAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">Dashboard Admin</h1>
      </header>

      <main>
        <SaldoAdmin />
        <UserManagement />
        <MitraManagement />
        <AvailabilityManagement />
      </main>
    </div>
  );
};

export default DashboardAdmin;
