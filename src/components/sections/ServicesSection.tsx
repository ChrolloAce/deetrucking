'use client';

import React from 'react';
import { 
  Truck, 
  Shield, 
  Satellite, 
  AlertTriangle, 
  Package, 
  Clock, 
  Box,
  Navigation
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

class ServiceManager {
  private services: Service[] = [
    {
      id: 'agil-descarga',
      title: 'Ágil descarga',
      description: 'Semiremolques aptos para el transporte de cualquier tipo de carga. Cubas y laterales rebatibles para una ágil carga y descarga.',
      icon: <Truck className="w-8 h-8" />
    },
    {
      id: 'contencion',
      title: 'Contención',
      description: 'Semiremolques con dispositivos fijos-contenedor.',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'seguimiento-satelital',
      title: 'Seguimiento satelital',
      description: 'Camiones dotados con sistema de seguimiento satelital con cobertura en todo el país.',
      icon: <Satellite className="w-8 h-8" />
    },
    {
      id: 'sustancias-peligrosas',
      title: 'Sustancias peligrosas',
      description: 'Habilitados para y con experiencia en el traslado de sustancias peligrosas.',
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      id: 'mercaderia-paletizada',
      title: 'Mercadería paletizada',
      description: 'Semiremolques aptos ideales para mercadería paletizada.',
      icon: <Package className="w-8 h-8" />
    },
    {
      id: 'tiempo-forma',
      title: 'En tiempo y forma',
      description: 'Modernos y potentes unidades permiten que sus productos lleguen en forma y tiempo al destino predeterminado.',
      icon: <Clock className="w-8 h-8" />
    },
    {
      id: 'carreton',
      title: 'Carretón',
      description: 'Naves 5tos de carga super bajo.',
      icon: <Box className="w-8 h-8" />
    },
    {
      id: 'logistica-integral',
      title: 'Logística integral',
      description: 'Soluciones completas de transporte y logística para su empresa.',
      icon: <Navigation className="w-8 h-8" />
    }
  ];

  getServices(): Service[] {
    return this.services;
  }
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

class ServiceCard extends React.Component<ServiceCardProps> {
  render() {
    const { service, index } = this.props;
    
    return (
      <div 
        className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
        style={{ 
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-lg font-heading font-semibold text-text mb-3 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>
    );
  }
}

interface ServicesSectionProps {
  className?: string;
}

class ServicesSection extends React.Component<ServicesSectionProps> {
  private serviceManager = new ServiceManager();

  render() {
    const { className = '' } = this.props;
    const services = this.serviceManager.getServices();

    return (
      <section id="servicios" className={`section-padding bg-white ${className}`}>
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-text mb-4">
              Servicios
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios de transporte especializados 
              para satisfacer todas sus necesidades logísticas.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary rounded-full"></div>
          <div className="absolute -bottom-32 -left-32 w-48 h-48 bg-primary rounded-full"></div>
        </div>
      </section>
    );
  }
}

export default ServicesSection;