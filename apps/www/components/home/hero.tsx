import React from 'react';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/ui/buttons/copy';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
            NEW: Load your scripts through Anime UI <span className="ml-1">→</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The Developer-First Animated Website
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            <span className="font-semibold text-foreground">Anime UI</span> is the
            open source web standard for animation.
            Built for modern web apps with full developer control.
          </p>

          <div className="space-y-6 w-full">
            <div>
              <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Get Started in 30 Seconds
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="rounded-full">
                  <div className="w-4 h-4 rounded-full bg-white mr-2 border">
                    <img src="/next.svg" alt="Next.js" />
                  </div>
                  Next.js
                </Button>
                <Button variant="outline" className="rounded-full">
                  <div className="w-4 h-4 rounded-full mr-2">
                    <img src="/react.svg" alt="React" />
                  </div>
                  React
                </Button>
                <Button variant="outline" className="rounded-full">
                  <div className="w-4 h-4 rounded-full mr-2">
                    <img src="/js.svg" alt="JavaScript" />
                  </div>
                  JavaScript
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-px bg-border flex-1 max-w-[50px]"></div>
              <span className="text-xs text-muted-foreground">OR</span>
              <div className="h-px bg-border flex-1 max-w-[50px]"></div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                Quick Start with CLI:
              </span>
              <div className="flex items-center gap-2 bg-muted/50 border rounded-full pl-4 pr-2 py-1.5">
                <code className="text-sm font-mono">
                  npx anime-ui-cli@beta init
                </code>
                <CopyButton className="h-6 w-6" content="npx anime-ui-cli@beta init" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20"></div>
          <div className="relative bg-card border rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
            </div>
            <div className="p-6 grid gap-6">
              <div className="space-y-2">
                <div className="h-2 w-1/3 bg-muted rounded"></div>
                <div className="h-2 w-2/3 bg-muted rounded"></div>
              </div>

              <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                <div>
                  <span className="text-green-400">$</span>{' '}
                  <span className="text-white">npx anime-ui-cli@beta init</span>
                </div>
                <br />
                <div className="text-gray-500">
                  # Choose your framework and components
                </div>
                <div className="text-gray-500">
                  # Automatic setup with GSAP animations
                </div>
                <br />
                <div>
                  <span className="text-purple-400">import</span> {'{'}
                </div>
                <div className="pl-4 text-blue-300">FadeIn,</div>
                <div className="pl-4 text-blue-300">SlideUp,</div>
                <div className="pl-4 text-blue-300">ParallaxSection</div>
                <div>
                  {'}'} <span className="text-purple-400">from</span>{' '}
                  <span className="text-green-400">"@/components/anime-ui"</span>;
                </div>
                <br />
                <div>
                  <span className="text-purple-400">export default function</span>{' '}
                  <span className="text-blue-400">Home</span>() {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">return</span> (
                </div>
                <div className="pl-8 text-yellow-400">
                  {'<ParallaxSection'}
                </div>
                <div className="pl-12 text-blue-300">speed</div>
                <span className="text-white">={'{'}0.5{'}'}</span>
                <div className="pl-8 text-yellow-400">{'>'}</div>
                <div className="pl-12 text-yellow-400">
                  {'<FadeIn '}
                  <span className="text-blue-300">delay</span>
                  <span className="text-white">={'{'}0.2{'}'}</span>
                  {'>'}
                </div>
                <div className="pl-16 text-yellow-400">
                  {'<h1>'}
                  <span className="text-white">Beautiful Animations</span>
                  {'</h1>'}
                </div>
                <div className="pl-12 text-yellow-400">{'</FadeIn>'}</div>
                <div className="pl-12 text-yellow-400">
                  {'<SlideUp '}
                  <span className="text-blue-300">duration</span>
                  <span className="text-white">={'{'}0.8{'}'}</span>
                  {'>'}
                </div>
                <div className="pl-16 text-yellow-400">
                  {'<p>'}
                  <span className="text-white">Powered by GSAP</span>
                  {'</p>'}
                </div>
                <div className="pl-12 text-yellow-400">{'</SlideUp>'}</div>
                <div className="pl-8 text-yellow-400">
                  {'</ParallaxSection>'}
                </div>
                <div className="pl-4">);</div>
                <div>{'}'}</div>
              </div>

              {/* Floating Animation Preview */}
              <div className="absolute bottom-8 right-8 w-80 bg-background border rounded-lg shadow-lg p-6 z-10 overflow-hidden">
                <div className="space-y-4">
                  <div className="h-2 w-3/4 bg-linear-to-r from-blue-500 to-purple-600 rounded animate-pulse"></div>
                  <div className="h-2 w-1/2 bg-linear-to-r from-purple-600 to-pink-500 rounded animate-pulse delay-100"></div>
                  <div className="h-2 w-5/6 bg-linear-to-r from-pink-500 to-blue-500 rounded animate-pulse delay-200"></div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>GSAP Powered Animations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
