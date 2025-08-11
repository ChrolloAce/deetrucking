'use client';

import React from 'react';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';

interface TruckModel {
  id: string;
  name: string;
  model: string;
  description: string;
  features: string[];
  images: {
    main: string;
    gallery: string[];
  };
  specifications: {
    engine: string;
    power: string;
    capacity: string;
    transmission: string;
  };
}

class TruckModelManager {
  private models: TruckModel[] = [
    {
      id: 'cargo-2842',
      name: 'Cargo',
      model: '2842',
      description: 'Diseñados para ofrecer mayor comodidad, mejorar el rendimiento y aumentar el ahorro de combustible. Los caracteriza la robustez, tecnología y su capacidad de carga de 16 toneladas de tracción.',
      features: [
        'Mayor comodidad de manejo',
        'Excelente rendimiento de combustible',
        'Capacidad de carga de 16 toneladas',
        'Tecnología avanzada',
        'Construcción robusta'
      ],
      images: {
        main: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        ]
      },
      specifications: {
        engine: 'MWM 6.10 TCA',
        power: '280 HP',
        capacity: '16 toneladas',
        transmission: 'Manual 9 velocidades'
      }
    }
  ];

  private currentModelIndex = 0;

  getModels(): TruckModel[] {
    return this.models;
  }

  getCurrentModel(): TruckModel {
    return this.models[this.currentModelIndex];
  }

  nextModel(): TruckModel {
    this.currentModelIndex = (this.currentModelIndex + 1) % this.models.length;
    return this.getCurrentModel();
  }

  previousModel(): TruckModel {
    this.currentModelIndex = this.currentModelIndex === 0 
      ? this.models.length - 1 
      : this.currentModelIndex - 1;
    return this.getCurrentModel();
  }

  downloadDatasheet(modelId: string): void {
    // In a real application, this would trigger a file download
    console.log(`Downloading datasheet for ${modelId}`);
    // window.open(`/datasheets/${modelId}.pdf`, '_blank');
  }
}

interface ProductSpotlightSectionProps {
  className?: string;
}

interface ProductSpotlightSectionState {
  currentModel: TruckModel;
  selectedImageIndex: number;
}

class ProductSpotlightSection extends React.Component<ProductSpotlightSectionProps, ProductSpotlightSectionState> {
  private modelManager = new TruckModelManager();

  constructor(props: ProductSpotlightSectionProps) {
    super(props);
    this.state = {
      currentModel: this.modelManager.getCurrentModel(),
      selectedImageIndex: 0
    };
  }

  handleNextModel = () => {
    const nextModel = this.modelManager.nextModel();
    this.setState({
      currentModel: nextModel,
      selectedImageIndex: 0
    });
  };

  handlePreviousModel = () => {
    const previousModel = this.modelManager.previousModel();
    this.setState({
      currentModel: previousModel,
      selectedImageIndex: 0
    });
  };

  handleDownloadDatasheet = () => {
    this.modelManager.downloadDatasheet(this.state.currentModel.id);
  };

  handleImageSelect = (index: number) => {
    this.setState({ selectedImageIndex: index });
  };

  render() {
    const { className = '' } = this.props;
    const { currentModel, selectedImageIndex } = this.state;

    return (
      <section id="unidades" className={`section-padding bg-background-light ${className}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Section Label */}
              <div>
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                  UNIDADES
                </span>
              </div>

              {/* Model Name */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text mb-2">
                  {currentModel.name} <span className="text-primary">{currentModel.model}</span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg text-text-muted leading-relaxed">
                {currentModel.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {currentModel.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-text">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Mini Gallery */}
              <div className="flex space-x-4">
                {currentModel.images.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => this.handleImageSelect(index)}
                    className={`w-20 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      selectedImageIndex === index 
                        ? 'border-primary' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${currentModel.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={this.handleDownloadDatasheet}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>DESCARGAR FICHA</span>
                </button>

                {/* Navigation */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={this.handlePreviousModel}
                    className="p-2 border border-border hover:border-primary text-text hover:text-primary rounded-md transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={this.handleNextModel}
                    className="p-2 border border-border hover:border-primary text-text hover:text-primary rounded-md transition-colors duration-200"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              {/* Large Model Number Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-9xl font-heading font-black text-text/5 select-none">
                  {currentModel.model}
                </span>
              </div>

              {/* Main Image */}
              <div className="relative z-10">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={selectedImageIndex < currentModel.images.gallery.length 
                      ? currentModel.images.gallery[selectedImageIndex] 
                      : currentModel.images.main}
                    alt={`${currentModel.name} ${currentModel.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Specs Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-border">
                  <h4 className="font-heading font-semibold text-text mb-3">Especificaciones</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Motor:</span>
                      <span className="text-text font-medium">{currentModel.specifications.engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Potencia:</span>
                      <span className="text-text font-medium">{currentModel.specifications.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Capacidad:</span>
                      <span className="text-text font-medium">{currentModel.specifications.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductSpotlightSection;