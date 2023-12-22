'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from "clsx";
import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
            <Link
                key={link.name}
                href={link.href}
                className={clsx(
                    'flex h-[48px] grow items-center text-white bg-gray-800 justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-gray-700 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                      'bg-gray-700': pathname === link.href,
                    },
                )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
        );
      })}
    </>
  );
}
