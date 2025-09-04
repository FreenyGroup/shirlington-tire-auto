import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

const CouponSection = () => {
  const coupons = [
    {
      title: '$50 Off New Tire Set',
      description:
        'Save $50 when you purchase a complete set of 4 new tires from our premium selection.',
      expirationDate: 'Dec 31, 2025',
      image: '/src/assets/new-tires-service.jpg',
    },
    {
      title: 'Free Tire Rotation',
      description:
        'Complimentary tire rotation service with any oil change or maintenance package.',
      expirationDate: 'Jan 15, 2025',
      image: '/src/assets/tire-rotation-service.jpg',
    },
    {
      title: '20% Off Wheel Alignment',
      description:
        'Professional wheel alignment service at 20% discount for improved handling and tire life.',
      expirationDate: 'Feb 28, 2025',
      image: '/src/assets/wheel-alignment-service.jpg',
    },
    {
      title: '$25 Off Tire Balancing',
      description:
        'Expert tire balancing service to eliminate vibrations and ensure smooth driving.',
      expirationDate: 'Jan 31, 2025',
      image: '/src/assets/tire-balancing-service.jpg',
    },
    {
      title: 'Buy 3 Get 1 Free',
      description:
        'Purchase 3 used tires and get the 4th one absolutely free. Quality guaranteed.',
      expirationDate: 'Mar 15, 2025',
      image: '/src/assets/used-tires-service.jpg',
    },
    {
      title: 'Emergency Repair Special',
      description:
        'Quick emergency tire repair service at a special discounted rate for urgent situations.',
      expirationDate: 'Dec 15, 2025',
      image: '/src/assets/tire-patches-service.jpg',
    },
  ];

  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Special Offers & Coupons
          </h2>
          <p className="text-muted-foreground text-lg">
            Save big on our professional tire services with these
            limited-time offers
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {coupons.map((coupon, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex h-50">
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {coupon.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {coupon.description}
                          </p>
                        </div>
                        <div>
                          <Separator className="mb-3" />
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-accent">
                              View Services
                            </span>
                            <span className="text-xs text-muted-foreground">
                              Expires: {coupon.expirationDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/4 relative">
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${coupon.image})`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default CouponSection;
