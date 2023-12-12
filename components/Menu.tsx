'use client';
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

export const OpenMenu = (props: any) => {
  const pathname = usePathname() || '/';
  return (
    <nav className='flex flex-col md:hidden min-h-[80vh] justify-between p-8 bg-primary'>
      <div className='flex flex-col gap-8'>
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <Link
              key={path}
              href={path}
              className='text-white text-lg font-medium leading-6'
            >
              <span
                className={clsx('btn btn-sm rounded-lg btn-ghost md:mb-3', {
                  'text-secondary text-lg font-bold leading-6': isActive,
                })}
              >
                {name}
              </span>
            </Link>
          );
        })}
      </div>
      <button
        className='text-primary text-lg bg-white my-0 mr-auto px-6 py-2 rounded-full'
        aria-label='Login'
      >
        登入
      </button>
    </nav>
  );
};
