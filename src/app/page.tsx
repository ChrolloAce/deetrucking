'use client';

import React from 'react';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">LUCMAR</h1>
          <p className="text-xl text-gray-600">Trucking Website Loading...</p>
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <p className="text-sm text-gray-500">✅ Next.js is working</p>
            <p className="text-sm text-gray-500">✅ Tailwind CSS is working</p>
            <p className="text-sm text-gray-500">✅ Header component loaded</p>
            <p className="text-sm text-gray-500">🚚 More components coming...</p>
          </div>
        </div>
      </div>
    </main>
  );
}