import Link from 'next/link';
import Image from 'next/Image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between px-5 py-6 bg-darkblue text-white overflow-hidden'>
      <div className='flex'>
        <Link href='/' className='mx-4'>
          <Image src='/tmdb-logo.png' alt='Logo' width={200} height={200} />
        </Link>
        <nav className='flex items-center ml-5 font-semibold'>
          <Link href='#' className='mx-4'>
            Movies
          </Link>
          <Link href='#' className='mx-4'>
            TVShows
          </Link>
          <Link href='#' className='mx-4'>
            People
          </Link>
          <Link href='#' className='mx-4'>
            More
          </Link>
        </nav>
      </div>
      <div className='flex items-center font-semibold'>
        <Link href='#' className='mx-4'>
          Login
        </Link>
        <Link href='#' className='mx-4'>
          Join TMDB
        </Link>
        <MagnifyingGlassIcon className='w-6 h-6 text-lightblue mx-4' />
      </div>
    </header>
  );
};

export default Header;
