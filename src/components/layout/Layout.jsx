import React from 'react';
import Header from '../common/Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="relative">
        {children}
      </main>
      {/* Footer will be added later */}
    </div>
  );
};

export default Layout;