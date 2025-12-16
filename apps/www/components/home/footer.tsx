import React from 'react';
import Link from 'next/link';

export const Footer = ({ lastUpdate }: { lastUpdate?: Date }) => {
  return (
    <footer className="relative py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="size-full flex items-center justify-start prose prose-sm text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <p className="text-start truncate">
            Built by{' '}
            <a href="" rel="noopener noreferrer" target="_blank">
              Chirag Saxena
            </a>
            . The source code is available on{' '}
            <a
              href="https://github.com/allindiacoderlife/anime-ui"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>

      {lastUpdate && (
        <p className="text-sm text-muted-foreground flex gap-1 items-center text-nowrap">
          Last updated:{' '}
          <span className="text-foreground font-medium px-1.5 py-[3px] bg-accent text-[13px] rounded-sm">
            {lastUpdate?.toLocaleDateString()}
          </span>
        </p>
      )}

      <div className="mt-12 pt-8 text-center">
        <h1 className="text-[10vw] md:text-[8vw] font-bold text-muted/20 leading-none select-none">
          Anime UI
        </h1>
      </div>
    </footer>
  );
};
