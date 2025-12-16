'use client';

import { Navbar } from 'fumadocs-ui/layouts/docs-client';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { cn } from '@/lib/utils';
import { CommandIcon, Github } from 'lucide-react';
import { useSearchContext, useSidebar } from 'fumadocs-ui/provider';
import { ThemeSwitcher } from '../animation/theme-switcher';
import { Menu } from '@/components/icons/menu';

export const NAV_ITEMS = [
  { title: 'Docs', url: '/docs' },
  { title: 'Components', url: '/docs/components' },
];

const githubUrl = '';

const NavItem = ({ title, url }: { title: string; url: string }) => {
  return (
    <Link
      href={url}
      className={buttonVariants({
        color: 'ghost',
        size: 'sm',
        className: cn(
          'text-sm! font-normal! text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white h-8! px-3! transition-colors duration-200 ease-in-out',
        ),
      })}
    >
      {title}
    </Link>
  );
};

export const Nav = () => {
  const { setOpenSearch } = useSearchContext();
  const { open, setOpen } = useSidebar();

  return (
    <Navbar className="md:h-17 h-14 border-b-0 bg-transparent md:px-5 px-3 flex items-center gap-3 max-w-[1670px] w-full left-1/2 -translate-x-1/2">
      <Link
        href="/"
        className={buttonVariants({
          color: 'ghost',
          size: 'icon-sm',
          className:
            '[&_svg]:size-5! md:[&_svg]:size-4.5! p-0! size-8! transition-colors duration-200 ease-in-out',
        })}
      >
        <svg
          fill="currentColor"
          width="800px"
          height="800px"
          viewBox="0 0 256 256"
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M137,65A24,24,0,1,1,137,31,24,24,0,0,1,137,65ZM23,103A24,24,0,1,0,57,103,24,24,0,0,0,23,103Zm120,88A24,24,0,1,0,177,191,24,24,0,0,0,143,191ZM225,55A24,24,0,1,0,225,89,24,24,0,0,0,225,55Z"
            opacity="0.2"
          />
          <path d="M230.63,49.37a32.05,32.05,0,0,0-45.26,0h0a31.85,31.85,0,0,0-5.15,6.76L152,48.43a32,32,0,0,0-54.6-23.06h0a32.05,32.05,0,0,0-5.75,37.41L57.68,93.33a32.06,32.06,0,0,0-40.31,4h0a32,32,0,0,0,42.88,47.4l70,51.36a32,32,0,1,0,52.34-10.76,31.51,31.51,0,0,0-4.78-3.92l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.61ZM108.69,36.69h0a16,16,0,1,1,0,22.62A16,16,0,0,1,108.69,36.69Zm-80,94.62a16,16,0,0,1,0-22.62h0a16,16,0,1,1,0,22.62Zm142.62,88a16,16,0,0,1-22.62-22.62h0a16,16,0,0,1,22.62,22.62Zm-8.55-43.17a31.93,31.93,0,0,0-23,7.09l-70-51.36a32.13,32.13,0,0,0-1.33-26.65l33.94-30.55a32,32,0,0,0,45.46-10.8L176,71.57a31.87,31.87,0,0,0,14.11,27Zm56.55-92.83a16,16,0,0,1-22.62-22.62h0a16,16,0,0,1,22.62,22.62Z" />
        </svg>
      </Link>

      <div className="flex items-center md:justify-between justify-end gap-2 flex-1">
        <div className="md:flex hidden items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.title} title={item.title} url={item.url} />
          ))}
        </div>

        <div className="flex items-center md:gap-3 gap-2">
          <button
            className="pl-3 pr-1.5 h-8 w-48 lg:w-56 xl:w-64 bg-accent hover:bg-accent/70 transition-colors duration-200 ease-in-out text-sm text-muted-foreground rounded-md flex items-center justify-between"
            onClick={() => setOpenSearch(true)}
          >
            <span className="font-normal">Search...</span>

            <div className="flex items-center gap-1">
              <kbd className="size-5 leading-none flex items-center justify-center border rounded-lg bg-background">
                <CommandIcon className="size-2.5" />
              </kbd>
              <kbd className="size-5 flex items-center justify-center border rounded-lg bg-background">
                <span className="leading-none text-[0.625rem] pt-px">K</span>
              </kbd>
            </div>
          </button>

          <div className="flex items-center gap-1 max-md:hidden">
            <a
              href={githubUrl}
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground size-8 [&_svg]:size-5 text-fd-muted-foreground"
              data-active="false"
            >
              <Github />
            </a>
          </div>

          <ThemeSwitcher className="max-md:hidden" />

          <button
            className={cn(
              buttonVariants({
                color: 'ghost',
                size: 'icon-sm',
                className:
                  'size-8! [&_svg]:size-5! text-fd-muted-foreground md:hidden',
              }),
            )}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu animate={open} />
          </button>
        </div>
      </div>
    </Navbar>
  );
};
