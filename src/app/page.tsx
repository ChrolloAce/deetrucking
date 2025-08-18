'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ValuePropositionsSection from '@/components/sections/ValuePropositionsSection';
import TruckGallerySection from '@/components/sections/TruckGallerySection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import DriverOpportunitiesSection from '@/components/sections/DriverOpportunitiesSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import FloatingCallButton from '@/components/ui/FloatingCallButton';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <HeroSection />
      
      <ValuePropositionsSection />
      
      <TruckGallerySection />
      
      <BenefitsSection />
      
      <DriverOpportunitiesSection />
      
      <ReviewsSection />
      
      <Footer />
      
      <FloatingCallButton />
    </main>
  );
}