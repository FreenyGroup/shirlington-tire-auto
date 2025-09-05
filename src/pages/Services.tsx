import TopBar from '@/components/TopBar';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Wrench,
  RotateCcw,
  Scale,
  Shield,
  Settings,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import service images
import tireSensorImage from '@/assets/tire-rotation.svg';
import alignmentImage from '@/assets/wheel-alignment.svg';
import tireRotationImage from '@/assets/tire-sensor.svg';
import tireRemovalImage from '@/assets/tire-removal.svg';
import tirePatchesImage from '@/assets/tire-patches.svg';
import tirePlugImage from '@/assets/tire-plug.svg';
import tireValveImage from '@/assets/tire-valve.svg';
import tireInstallationImage from '@/assets/tire-installation.svg';
import tireBalancingImage from '@/assets/tire-balancing.svg';

const Services = () => {
  const services = [
    {
      image: tireRotationImage,
      title: 'Tire Rotation',
      features: [
        'Want to extend tire life',
        'Notice uneven tire wear',
        'Follow maintenance schedules',
      ],
      price: '$30.00 - $40.00',
    },
    {
      image: alignmentImage,
      title: 'Wheel Alignments',
      features: [
        'Car pulls to one side',
        'Experience uneven tire wear',
        'Want improved fuel efficiency',
      ],
      price: '$100 - $150',
    },
    {
      image: tireSensorImage,
      title: 'Tire Sensor Replacement (TPMS)',
      features: [
        'TPMS warning light is on',
        'Need accurate tire pressure monitoring',
        'Want reliable sensor performance',
      ],
      price: '$100.00',
    },
    {
      image: tireRemovalImage,
      title: 'Tire Removal (Labor)',
      features: [
        'Need tires removed from wheels',
        'Require professional tire service',
        'Want safe tire handling',
      ],
      price: '$25.00',
    },
    {
      image: tirePatchesImage,
      title: 'Tire Patches',
      features: [
        'Have a punctured tire',
        'Need quick repair solutions',
        'Want to avoid tire replacement',
      ],
      price: '$35.00',
    },
    {
      image: tirePlugImage,
      title: 'Tire Plug',
      features: [
        'Have a small puncture hole',
        'Need quick and affordable repair',
        'Want to extend tire life',
      ],
      price: '$30.00',
    },
    {
      image: tireValveImage,
      title: 'Regular Valve Replacement',
      features: [
        'Need new valve stems',
        'Experience air leaks',
        'Want reliable tire inflation',
      ],
      price: '$25.00',
    },
    {
      image: tireInstallationImage,
      title: 'Tire Installation and Balancing',
      features: [
        'Need complete tire service',
        'Want professional installation',
        'Require precise wheel balancing',
      ],
      price: '$35.00',
    },
    {
      image: tireBalancingImage,
      title: 'Tire Balancing (Only)',
      features: [
        'Experience wheel vibrations',
        'Need balancing service only',
        'Want smoother driving experience',
      ],
      price: '$25.00',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Tire Services
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Complete tire solutions from installation to maintenance,
            backed by expert service and quality parts.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer comprehensive tire services to keep you safe on
              the road
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Service Image */}
                <div className="aspect-video w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  {/* "This service is right for you if:" */}
                  <p className="text-sm text-muted-foreground mb-3">
                    This service is right for you if:
                  </p>

                  {/* 3 Bullet Points */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Separator Line */}
                  <Separator className="mb-4" />

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-foreground">
                      {service.price}
                    </span>
                  </div>

                  {/* Schedule Appointment Button */}
                  <Button className="w-full" size="lg">
                    <Link to="/contact">Schedule Your Service</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us today for a free quote on any of our tire
                services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Wrench className="h-5 w-5" />
                  <Link to="/contact">Schedule Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
