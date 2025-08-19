'use client';

import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
}

class NavigationManager {
  private items: NavigationItem[] = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'CAREERS', href: '/#careers' },
    { label: 'CONTACT', href: '/contact' },
  ];

  getNavigationItems(): NavigationItem[] {
    return this.items;
  }
}

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const navigationManager = new NavigationManager();
  const navigationItems = navigationManager.getNavigationItems();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/') && href !== '/#careers') {
      window.location.href = href;
    } else {
      const element = document.querySelector(href.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg ${className}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-white tracking-wider">
              ANNA MARSI LLC
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-white hover:text-primary transition-colors duration-200 font-medium tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Phone Number */}
          <div className="hidden lg:flex items-center text-white">
            <Phone className="w-4 h-4 mr-2" />
            <a href="tel:(305) 942-4054" className="font-semibold hover:text-primary transition-colors">
              (305) 942-4054
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-b border-white/20 shadow-xl">
            <div className="container-custom py-6">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-white hover:text-primary transition-colors duration-200 font-medium tracking-wide text-left py-3 px-2 border-b border-white/10 last:border-b-0"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center text-white pt-4 mt-4 border-t border-white/20">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:(305) 942-4054" className="font-semibold hover:text-primary transition-colors">
                    (305) 942-4054
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}