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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock, Mail, Wrench } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch for professional tire services, quotes, or
            any questions about your vehicle's needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you
                  within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Service Interested In
                  </label>
                  <Input
                    id="service"
                    placeholder="e.g., New tires, Alignment, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your tire needs or ask any questions..."
                    rows={4}
                  />
                </div>

                <Button variant="hero" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Visit Our Shop
                  </CardTitle>
                  <CardDescription>
                    Professional tire services in a convenient
                    location
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Address
                      </h3>
                      <p className="text-muted-foreground">
                        3800 S four Mile Run Dr
                        <br />
                        Suite E, Arlington VA 22206
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+7039316666"
                          className="flex items-center space-x-1 hover:text-accent transition-colors"
                        >
                          (703) 931-6666
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+7035171807"
                          className="flex items-center space-x-1 hover:text-accent transition-colors"
                        >
                          (703) 517-1807
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:info@shirlingtontires.com"
                          className="flex items-center space-x-1 hover:text-accent transition-colors"
                        >
                          info@shirlingtontires.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-foreground pr-2">
                          Monday-Friday
                        </span>
                        <span className="text-muted-foreground">
                          8:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">
                          Saturday
                        </span>
                        <span className="text-muted-foreground">
                          8:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground">
                          Sunday
                        </span>
                        <span className="text-muted-foreground">
                          Closed
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-accent-foreground">
                <a
                  href="https://ams.acima.com/discover/new?location_guid=loca-212b3855-064c-4e81-acb9-b0916e222658&utm_source=web-banner&utm_medium=merchant&utm_campaign=mktg-lp&utm_content=rven2320X100"
                  target="_blank"
                >
                  <img
                    alt=""
                    title=""
                    className="mx-auto"
                    src="https://s3.us-west-2.amazonaws.com/marketing.acimacredit.com/Acima-Web-Banners/RV-EN2/RVEN2320X100.png?utm_source=web-banner&amp;utm_medium=merchant&amp;utm_campaign=mktg-lp&amp;utm_content=rven2320X100"
                  />
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
