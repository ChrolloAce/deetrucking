'use client';

import React from 'react';
import { Phone } from 'lucide-react';

interface FloatingCallButtonProps {
  phoneNumber?: string;
  className?: string;
}

class CallButtonManager {
  private phoneNumber: string;

  constructor(phoneNumber: string = '(305) 942-4054') {
    this.phoneNumber = phoneNumber;
  }

  handleCall(): void {
    window.open(`tel:${this.phoneNumber}`, '_self');
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  formatPhoneForDisplay(): string {
    return this.phoneNumber;
  }
}

export default function FloatingCallButton({ 
  phoneNumber = '(305) 942-4054', 
  className = '' 
}: FloatingCallButtonProps) {
  const callManager = new CallButtonManager(phoneNumber);

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <button
        onClick={() => callManager.handleCall()}
        className="group bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label={`Call ${callManager.formatPhoneForDisplay()}`}
      >
        <div className="flex items-center justify-center">
          <Phone className="w-6 h-6 group-hover:animate-bounce" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-background-dark text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Call {callManager.formatPhoneForDisplay()}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-background-dark border-y-4 border-y-transparent"></div>
        </div>
      </button>

      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping"></div>
    </div>
  );
}