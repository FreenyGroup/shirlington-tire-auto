import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/placeholder.svg"
              alt="Shirlington Tires Logo"
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/services')
                  ? 'text-accent'
                  : 'text-foreground'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/contact')
                  ? 'text-accent'
                  : 'text-foreground'
              }`}
            >
              Contact
            </Link>
            <Button variant="accent" size="sm" asChild>
              <Link to="/contact">
                <Phone className="h-4 w-4" />
                Get Quote
              </Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-card border border-border z-50"
              >
                <DropdownMenuItem asChild>
                  <Link
                    to="/"
                    className={`w-full ${
                      isActive('/')
                        ? 'text-accent'
                        : 'text-foreground'
                    }`}
                  >
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/services"
                    className={`w-full ${
                      isActive('/services')
                        ? 'text-accent'
                        : 'text-foreground'
                    }`}
                  >
                    Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/contact"
                    className={`w-full ${
                      isActive('/contact')
                        ? 'text-accent'
                        : 'text-foreground'
                    }`}
                  >
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/contact"
                    className="w-full text-accent font-medium"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Get Quote
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
