'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const navItems = {
  '/instruction': {
    name: '使用說明',
  },
  '/charge': {
    name: '收費方式',
  },
  '/site-info': {
    name: '站點資訊',
  },
  '/news': {
    name: '最新消息',
  },
  '/events': {
    name: '活動專區',
  },
};

export const Navigation = (props: any) => {
  const pathname = usePathname() || '/';
  return (
    <div className='self-center flex w-full max-w-[1192px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap'>
      <div className='flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap'>
        <Link key='/' href='/'>
          <Image
            loading='lazy'
            src='/logo_180x180.png'
            className='aspect-square object-contain object-center overflow-hidden shrink-0 max-w-full'
            alt=''
            width={95}
            height={95}
          />
        </Link>
        <div className='items-stretch self-center flex justify-between gap-5 my-auto px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center'>
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className='text-lime-700 text-lg font-medium leading-6'
              >
                <span
                  className={clsx(
                    'btn btn-sm rounded-lg btn-ghost px-3 md:mb-3',
                    {
                      'text-lime-400 text-lg font-bold leading-6': isActive,
                    }
                  )}
                >
                  {name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <button
        className='text-white text-center text-lg leading-5 tracking-normal whitespace-nowrap justify-center items-stretch bg-lime-400 self-center my-auto px-6 py-2.5 rounded-[100px] max-md:px-5'
        aria-label='Login'
      >
        登入
      </button>
    </div>
  );
};
