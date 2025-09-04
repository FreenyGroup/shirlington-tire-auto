const Footer = () => {
  return (
    <div>
      <footer className="relative bg-primary text-primary-foreground py-12">
        <div className="absolute top-0 left-0 w-full h-20 bg-background">
          <svg
            className="absolute bottom-0 w-full h-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z"
              fill="hsl(var(--primary))"
            />
          </svg>
        </div>
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Shirlington Tires Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-primary-foreground/80">
                Professional tire services with quality parts and
                guaranteed satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>3800 S four Mile Run Dr</li>
                <li>Suite E, Arlington VA 22206</li>
                <li>(703) 931-6666</li>
                <li>(703) 517-1807</li>
                <li>info@shirlingtontires.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Mon-Fri: 8AM-6PM</li>
                <li>Saturday: 8AM-4PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Shirlington Tires. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
