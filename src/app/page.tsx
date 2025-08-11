'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ValuePropositionsSection from '@/components/sections/ValuePropositionsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FloatingCallButton from '@/components/ui/FloatingCallButton';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <HeroSection />
      
      <ValuePropositionsSection />
      
      <ServicesSection />
      
      <Footer />
      
      <FloatingCallButton />
    </main>
  );
}