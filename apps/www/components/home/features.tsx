import React from 'react';

export const Features = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Anime UI?</h2>
        <p className="text-muted-foreground max-w-2xl">
          Anime UI brings professional GSAP-powered animations to your React projects with zero configuration. Use our CLI to scaffold animated components in seconds, or import pre-built animations and customize them to match your design system perfectly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* GSAP Powered */}
        <div className="border rounded-xl p-6 bg-card">
            <div className="flex items-center gap-2 mb-4 text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <h3 className="text-xl font-semibold text-foreground">GSAP Powered</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Built on top of GSAP, the industry-standard animation library. Get professional-grade animations with silky-smooth 60fps performance out of the box.</p>
            
            <div className="space-y-4">
                <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>FadeIn</span>
                        <span className="text-emerald-500">60fps</span>
                    </div>
                    <div className="h-6 bg-emerald-500/20 rounded-md overflow-hidden relative">
                        <div className="absolute top-0 left-0 h-full bg-emerald-500 w-full animate-pulse"></div>
                        <span className="absolute inset-0 flex items-center pl-2 text-xs font-medium text-emerald-500">Smooth</span>
                    </div>
                </div>
                <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>SlideUp</span>
                        <span className="text-emerald-500">60fps</span>
                    </div>
                    <div className="h-6 bg-emerald-500/20 rounded-md overflow-hidden relative">
                        <div className="absolute top-0 left-0 h-full bg-emerald-500 w-full animate-pulse delay-75"></div>
                        <span className="absolute inset-0 flex items-center pl-2 text-xs font-medium text-emerald-500">Smooth</span>
                    </div>
                </div>
                 <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Parallax</span>
                        <span className="text-emerald-500">60fps</span>
                    </div>
                    <div className="h-6 bg-emerald-500/20 rounded-md overflow-hidden relative">
                        <div className="absolute top-0 left-0 h-full bg-emerald-500 w-full animate-pulse delay-150"></div>
                        <span className="absolute inset-0 flex items-center pl-2 text-xs font-medium text-emerald-500">Smooth</span>
                    </div>
                </div>
                 <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>ScaleIn</span>
                        <span className="text-emerald-500">60fps</span>
                    </div>
                    <div className="h-6 bg-emerald-500/20 rounded-md overflow-hidden relative">
                        <div className="absolute top-0 left-0 h-full bg-emerald-500 w-full animate-pulse delay-200"></div>
                        <span className="absolute inset-0 flex items-center pl-2 text-xs font-medium text-emerald-500">Smooth</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Fully Customizable */}
        <div className="border rounded-xl p-6 bg-card">
             <div className="flex items-center gap-2 mb-4 text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
                <h3 className="text-xl font-semibold text-foreground">Fully Customizable</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Every animation is customizable with props. Control duration, delay, easing, and more. Style components with Tailwind or your own CSS.</p>
            <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs text-gray-300">
                <div><span className="text-purple-400">{'<FadeIn'}</span></div>
                <div className="pl-4"><span className="text-blue-300">duration</span><span className="text-white">={'{'}1{'}'}</span></div>
                <div className="pl-4"><span className="text-blue-300">delay</span><span className="text-white">={'{'}0.2{'}'}</span></div>
                <div className="pl-4"><span className="text-blue-300">ease</span><span className="text-white">=</span><span className="text-green-400">"power2.out"</span></div>
                <div className="pl-4"><span className="text-blue-300">className</span><span className="text-white">=</span><span className="text-green-400">"my-custom-class"</span></div>
                <div><span className="text-purple-400">{'>'}</span></div>
                <div className="pl-4 text-yellow-400">{'<h1>'}
                <span className="text-white">Animated Content</span>
                {'</h1>'}</div>
                <div><span className="text-purple-400">{'</FadeIn>'}</span></div>
                <br/>
                <div className="text-gray-500">// Works with any component</div>
                <div><span className="text-purple-400">{'<SlideUp'}</span> <span className="text-blue-300">from</span><span className="text-white">=</span><span className="text-green-400">"bottom"</span><span className="text-purple-400">{'>'}</span></div>
                <div className="pl-4 text-yellow-400">{'<Card'}
                <span className="text-white"> content </span>
                {'/>'}
                </div>
                <div><span className="text-purple-400">{'</SlideUp>'}</span></div>
            </div>
        </div>

        {/* TypeScript First */}
        <div className="border rounded-xl p-6 bg-card">
             <div className="flex items-center gap-2 mb-4 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                <h3 className="text-xl font-semibold text-foreground">TypeScript First</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Built with TypeScript for superior DX. Get full autocomplete, type checking, and inline documentation right in your editor.</p>
             <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs text-gray-300">
                <div className="text-gray-500">// Full type safety</div>
                <div><span className="text-purple-400">import</span> <span className="text-white">{'{'}</span> <span className="text-blue-300">FadeIn</span> <span className="text-white">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'anime-ui'</span>;</div>
                <br/>
                <div><span className="text-purple-400">type</span> <span className="text-blue-400">Props</span> = <span className="text-white">{'{'}</span></div>
                <div className="pl-4"><span className="text-blue-300">duration</span><span className="text-white">?: number;</span></div>
                <div className="pl-4"><span className="text-blue-300">delay</span><span className="text-white">?: number;</span></div>
                <div className="pl-4"><span className="text-blue-300">ease</span><span className="text-white">?: string;</span></div>
                <div><span className="text-white">{'}'}</span></div>
                <br/>
                <div className="text-gray-500">// IntelliSense support</div>
                <div><span className="text-purple-400">{'<FadeIn'}</span></div>
                <div className="pl-4"><span className="text-blue-300">duration</span><span className="text-white">={'{'}...</span></div>
                <div className="pl-12 text-gray-500">// ^ Autocomplete available</div>
                <div><span className="text-purple-400">{'/>'}</span></div>
            </div>
        </div>

        {/* Rich Animation Library */}
        <div className="border rounded-xl p-6 bg-card md:col-span-2 lg:col-span-1">
             <div className="flex items-center gap-2 mb-4 text-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                <h3 className="text-xl font-semibold text-foreground">Rich Animation Library</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Choose from dozens of pre-built animations: FadeIn, SlideUp, ParallaxSection, RevealText, and more. Each optimized for performance and accessibility.</p>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-all cursor-pointer border border-transparent hover:border-blue-500/50">
                    <div className="text-xs font-medium mb-2">FadeIn</div>
                    <div className="h-12 bg-linear-to-r from-blue-500/20 to-transparent rounded animate-pulse"></div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-all cursor-pointer border border-transparent hover:border-purple-500/50">
                    <div className="text-xs font-medium mb-2">SlideUp</div>
                    <div className="h-12 bg-linear-to-t from-purple-500/20 to-transparent rounded animate-pulse delay-75"></div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-all cursor-pointer border border-transparent hover:border-pink-500/50">
                    <div className="text-xs font-medium mb-2">ScaleIn</div>
                    <div className="h-12 bg-linear-to-br from-pink-500/20 to-transparent rounded animate-pulse delay-150"></div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-all cursor-pointer border border-transparent hover:border-green-500/50">
                    <div className="text-xs font-medium mb-2">Parallax</div>
                    <div className="h-12 bg-linear-to-r from-green-500/20 to-transparent rounded animate-pulse delay-200"></div>
                </div>
            </div>
        </div>

        {/* Framework Compatible */}
        <div className="border rounded-xl p-6 bg-card md:col-span-2">
             <div className="flex items-center gap-2 mb-4 text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                <h3 className="text-xl font-semibold text-foreground">Framework Compatible</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-8">Works seamlessly with React, Next.js, and any React-based framework. Server-side rendering ready with proper hydration support.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: 'React', color: 'bg-blue-500' },
                  { name: 'Next.js', color: 'bg-white' },
                  { name: 'Remix', color: 'bg-blue-400' },
                  { name: 'Gatsby', color: 'bg-purple-500' },
                  { name: 'Vite', color: 'bg-yellow-400' },
                  { name: 'CRA', color: 'bg-blue-300' }
                ].map((fw) => (
                    <div key={fw.name} className="flex flex-col items-center justify-center p-4 border rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors group">
                        <div className={`w-10 h-10 ${fw.color} rounded mb-2 group-hover:scale-110 transition-transform`}></div>
                        <span className="text-xs font-medium">{fw.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
