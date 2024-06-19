import { navlinks } from '@/constants/navlinks';
import { Navlink } from '@/types/navlink';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Heading } from './Heading';
import { socials } from '@/constants/socials';

const Navigation = () => {
  const pathnames = usePathname();

  const isActive = (href: string) => pathnames === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            'text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm',
            isActive(link.href) && 'bg-white shadow-lg text-primary'
          )}
        >
          <link.icon
            className={twMerge(
              'h-4 w-4 flex-shrink-0',
              isActive(link.href) && 'text-sky-500'
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
      <Heading as="p" className="text-gray-500 text-sm md:text-sm lg:text-sm pt-10 px-2 font-semibold">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
