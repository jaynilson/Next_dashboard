// import AcmeLogo from '../app/ui/acme-logo';
// import { ArrowRightIcon } from '@/heroicons/react/24/outline';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='flex min-h-screen flex-col p-6'>
      <div className='flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52'>
        {/* <AcmeLogo /> */}
        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
        <p className={`${lusitana.className} text-x1 text-gray-800 md:text-3xl md:leading-normal`}>
          <strong>Welcome to Acme.</strong> This is the example for the {' '} <a href='http"//nextjs.org/learn/' className='text-blue-500'> Next.js Learn Course</a>
          , brought to you by vercel
        </p>

        <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
          <Image src=''
            width={1000}
            height={760}
            className='hidden md:block'
            alt='ScreenShots of the dashboard project showing desktop version' />
          <Image src=''
            width={560}
            height={620}
            className='block md:hidden'
            alt='This is the image of the mobile hero when the screen is mobile size' />
        </div>
      </div>
    </main>
  );
}