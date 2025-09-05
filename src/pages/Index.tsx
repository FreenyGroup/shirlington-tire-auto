import Navigation from '@/components/Navigation';
import TopBar from '@/components/TopBar';
import CouponSection from '@/components/CouponSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Wrench,
  Star,
  Shield,
  Clock,
  RotateCcw,
  Scale,
  Settings,
  CreditCard,
  DollarSign,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/tire-shop-hero-6.svg';
import newUsedImage from '@/assets/new-tires-service.jpg';
import rotationImage from '@/assets/tire-rotation-service.jpg';
import balancingImage from '@/assets/tire-balancing-service.jpg';
import wheelAlignmentImage from '@/assets/wheel-alignment-service.jpg';
import tireInspectionImage from '@/assets/tire-patches-service.jpg';
import emergencyImage from '@/assets/used-tires-service.jpg';
import firestoneImage from '@/assets/2.svg';
import goodyearImage from '@/assets/1.svg';
import sumitomoImage from '@/assets/3.svg';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description:
        'All our tires and services come with comprehensive warranties for your peace of mind.',
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description:
        'Quick turnaround times without compromising on quality workmanship.',
    },
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description:
        'Certified professionals with years of experience in tire and automotive services.',
    },
  ];

  const services = [
    {
      icon: Wrench,
      title: 'New & Used Tires',
      category: 'Tire Replacement',
      image: newUsedImage,
    },
    {
      icon: RotateCcw,
      title: 'Tire Rotation',
      category: 'Maintenance',
      image: rotationImage,
    },
    {
      icon: Scale,
      title: 'Balancing & Patches',
      category: 'Tire Repair',
      image: balancingImage,
    },
    {
      icon: Settings,
      title: 'Wheel Alignment',
      category: 'Maintenance',
      image: wheelAlignmentImage,
    },
    {
      icon: Shield,
      title: 'Tire Inspection',
      category: 'Maintenance',
      image: tireInspectionImage,
    },
    {
      icon: Clock,
      title: 'Emergency Repair',
      category: 'Tire Repair',
      image: emergencyImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden">
        {/* Mobile: Image above text with raised positioning */}
        <div className="lg:hidden relative">
          <div
            className="w-full h-[40vh] bg-cover bg-center -mt-32 pt-32"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          ></div>
          <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 py-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Professional Tire Services You Can Trust
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Expert tire installation, repair, and maintenance
                services with quality parts and guaranteed
                satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/services">
                    <Wrench className="h-5 w-5" />
                    View Services
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden lg:block relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
                Professional Tire Services You Can Trust
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Expert tire installation, repair, and maintenance
                services with quality parts and guaranteed
                satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/services">
                    <Wrench className="h-5 w-5" />
                    View Services
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div
                className="w-full h-96 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${heroImage})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/*
      <CouponSection />
      */}

      {/* Credit Card Section */}
      <section className="py-20 bg-background">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-cover bg-center rounded-lg">
                <a
                  href="https://ams.acima.com/discover/new?location_guid=loca-212b3855-064c-4e81-acb9-b0916e222658&utm_source=web-banner&utm_medium=merchant&utm_campaign=mktg-lp&utm_content=rven2336x260"
                  target="_blank"
                >
                  <img
                    alt=""
                    className="mx-auto h-full"
                    title=""
                    src="https://s3.us-west-2.amazonaws.com/marketing.acimacredit.com/Acima-Web-Banners/RV-EN2/RVEN2336X260.png?utm_source=web-banner&amp;utm_medium=merchant&amp;utm_campaign=mktg-lp&amp;utm_content=rven2336x260"
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <CreditCard className="h-8 w-8 text-accent mr-4" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Flexible Payment Options with Acima
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Apply quickly with Acima's flexible lease-to-own or
                credit options, offering high approval amounts up to
                $5,000 for leasing or $6,000 for credit to help
                customers get what they need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group"
                  asChild
                >
                  <Link to="/contact">
                    More Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ProTire Shop?
            </h2>
            <p className="text-muted-foreground text-lg">
              Professional service backed by quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group bg-primary p-8 rounded-2xl shadow-lg shadow-primary/30"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 group-hover:animate-float">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/90">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Complete tire solutions for every vehicle and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  ></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <service.icon className="h-8 w-8 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {service.category}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-background">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Brands We Work With
            </h2>
            <p className="text-muted-foreground text-lg">
              Quality tire brands you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Firestone', image: firestoneImage },
              { name: 'Goodyear', image: goodyearImage },
              { name: 'Sumitomo', image: sumitomoImage },
            ].map((brand, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-card hover:shadow-lg transition-shadow h-32"
              >
                <img
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Trusted by hundreds of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                text: 'Excellent service! They replaced my tires quickly and the price was very reasonable. Highly recommend!',
                rating: 5,
              },
              {
                name: 'Mike Rodriguez',
                text: 'Professional and honest. They fixed my tire instead of trying to sell me new ones. Great integrity!',
                rating: 5,
              },
              {
                name: 'Emily Chen',
                text: 'Fast, reliable service. The staff was knowledgeable and helped me choose the right tires for my car.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-accent fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-foreground">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto">
          <a
            href="https://ams.acima.com/discover/new?location_guid=loca-212b3855-064c-4e81-acb9-b0916e222658&utm_source=web-banner&utm_medium=merchant&utm_campaign=mktg-lp&utm_content=rvsp2728X90"
            target="_blank"
          >
            <img
              src="https://s3.us-west-2.amazonaws.com/marketing.acimacredit.com/Acima-Web-Banners/RV-SP2/RVSP2728X90.png?utm_source=web-banner&amp;utm_medium=merchant&amp;utm_campaign=mktg-lp&amp;utm_content=rvsp2728X90"
              alt="Description of first image"
            />
          </a>
          <a
            href="https://ams.acima.com/discover/new?location_guid=loca-212b3855-064c-4e81-acb9-b0916e222658&utm_source=web-banner&utm_medium=merchant&utm_campaign=mktg-lp&utm_content=sten2728X90"
            target="_blank"
          >
            <img
              alt=""
              title=""
              src="https://s3.us-west-2.amazonaws.com/marketing.acimacredit.com/Acima-Web-Banners/ST-EN2/STEN2728X90.png?utm_source=web-banner&amp;utm_medium=merchant&amp;utm_campaign=mktg-lp&amp;utm_content=sten2728X90"
            />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for professional tire services and
            competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <Link to="/contact">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
