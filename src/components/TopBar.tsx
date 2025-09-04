import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>
                3800 S four Mile Run Dr, Suite E, Arlington VA 22206
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {/* Desktop - show both numbers */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="tel:+7039316666"
                className="flex items-center space-x-1 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(703) 931-6666</span>
              </a>
              <a
                href="tel:+7035171807"
                className="flex items-center space-x-1 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(703) 517-1807</span>
              </a>
            </div>

            {/* Mobile - dropdown menu */}
            <div className="sm:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:text-accent"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-card border border-border z-50"
                >
                  <DropdownMenuItem asChild>
                    <a
                      href="tel:+7039316666"
                      className="w-full flex items-center space-x-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>(703) 931-6666</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="tel:+7035171807"
                      className="w-full flex items-center space-x-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>(703) 517-1807</span>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
