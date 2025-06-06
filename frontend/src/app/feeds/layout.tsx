import React from 'react';
import Navbar from '@/components/Navbar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mt-4">{children}</main>
    </div>
  );
}
