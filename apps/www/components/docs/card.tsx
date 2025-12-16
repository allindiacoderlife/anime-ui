'use client';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Card = ({
  children,
  className,
  accent,
  icon,
  title,
  href,
  ...props
}: any) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    function handleMouseMove(e: MouseEvent) {
      cards.forEach((card) => {
        const htmlCard = card as HTMLElement;
        const rect = htmlCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        htmlCard.style.setProperty('--mouse-x', `${x}px`);
        htmlCard.style.setProperty('--mouse-y', `${y}px`);
      });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cardId"
    >
      <Link
        href={href}
        className={cn(
          'card no-underline',
          accent && '[&>h3]:text-fd-muted-foreground',
          className,
        )}
        {...props}
      >
        {icon}
        <h1 className="mt-4 text-lg font-medium no-underline">{title}</h1>
        {children}
      </Link>
    </div>
  );
};
