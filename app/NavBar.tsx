'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/issues', label: 'Issues' },
  ];
  return (
    <nav className='flex h-14 text-lg border-b-2 mb-8 items-center'>
      <Link href={'/'} className='px-6 text-xl'>
        <AiFillBug />
      </Link>
      <ul>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              'text-zinc-900': pathname === link.href,
              'text-zinc-600': pathname !== link.href,
              'hover:text-zinc-800 transition-colors px-4': true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
