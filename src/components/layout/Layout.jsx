import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="relative">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;