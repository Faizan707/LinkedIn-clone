import React from 'react';
import Navbar from '@/components/Navbar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto mt-4 w-[1000px]">{children}</main>
    </div>
  );
}
