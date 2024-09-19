import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
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
            className='px-6 text-zinc-600 hover:text-zinc-800 transition-colors'
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
