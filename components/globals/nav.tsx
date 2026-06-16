import { NavItems } from '@/constants';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

import AnimatedButton from '../ui/animated-button';
import { Container } from '../primitives/container';

export const NavBar = () => {
  return (
    <Container size="lg" className="mt-4 sticky top-4 z-50">
      <div className="bg-white/40 p-1 rounded-md backdrop-blur-sm">
        <header className="bg-white py-2 px-2 rounded-md">
          <nav className="flex items-center justify-between">
            <span className="font-bold">LOGO</span>

            <ul className="hidden sm:flex items-center gap-4">
              {NavItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className="text-foreground font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <AnimatedButton className="hidden sm:block" variant="secondary">
                Get Started
              </AnimatedButton>

              <button
                type="button"
                aria-label="Open menu"
                className="bg-secondary sm:hidden p-2 rounded-full"
              >
                <MenuIcon className="text-white" />
              </button>
            </div>
          </nav>
        </header>
      </div>
    </Container>
  );
};
