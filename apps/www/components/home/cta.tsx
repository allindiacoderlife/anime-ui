import React from 'react';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/ui/buttons/copy';

export const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-muted-foreground mb-8">Choose your framework and start building animated experiences with GSAP-powered components in minutes.</p>
      
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
            CHOOSE YOUR FRAMEWORK
        </div>
        <div className="flex flex-wrap justify-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
                <div className="w-3 h-3 rounded-full bg-white mr-2 border">
                  <img src="/next.svg" alt="Next.js" />
                </div>
                Next.js
            </Button>
             <Button variant="outline" size="sm" className="rounded-full">
                <div className="w-3 h-3 rounded-full mr-2">
                  <img src="/react.svg" alt="React" />
                </div>
                React
            </Button>
             <Button variant="outline" size="sm" className="rounded-full">
                <div className="w-3 h-3 rounded-full mr-2">
                  <img src="/js.svg" alt="JavaScript" />
                </div>
                JavaScript
            </Button>
        </div>

        <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-px bg-border flex-1 max-w-[100px]"></div>
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="h-px bg-border flex-1 max-w-[100px]"></div>
        </div>

        <div className="space-y-2">
             <div className="text-xs font-medium text-muted-foreground">
                QUICK START WITH CLI
            </div>
            <div className="flex items-center gap-2 bg-muted/50 border rounded-full pl-4 pr-2 py-1.5">
                <code className="text-sm font-mono">npx anime-ui-cli@beta init</code>
                <CopyButton className="h-6 w-6" content="npx anime-ui-cli@beta init" />
            </div>
             <div className="text-xs text-muted-foreground">
                Scaffold a complete setup with your preferred framework and animation components
            </div>
        </div>
      </div>
    </section>
  );
};
