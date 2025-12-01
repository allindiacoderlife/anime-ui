'use client';

import React, { useRef } from 'react';

import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText, ScrollTrigger);

// Inject styles
if (typeof document !== 'undefined') {
  const styleId = 'block-text-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .block-line-wrapper {
        position: relative;
        width: max-content;
        display: block;
      }

      .block-line {
        position: relative;
        display: block;
      }

      .block-revealer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        will-change: transform;
        z-index: 1;
      }
    `;
    document.head.appendChild(style);
  }
}

const Copy = ({
  children,
  animationOnScroll = true,
  delay = 0,
  blockColor = '#000',
  stagger = 0.15,
  duration = 0.75,
}: {
  children: React.ReactNode;
  animationOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<HTMLDivElement[]>([]);
  const blocks = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return null;

      splitRefs.current = [];
      lines.current = [];
      blocks.current = [];

      let elements = [];

      if (containerRef.current.hasAttribute('data-copy-wrapper')) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        const split = new SplitText(element, {
          type: 'lines',
          linesClass: 'block-line++',
          lineThreshold: 0.1,
        });

        splitRefs.current.push(split);

        split.lines.forEach((line) => {
          const wrapper = document.createElement('div');
          wrapper.className = 'block-line-wrapper';
          if (line.parentNode) {
            line.parentNode.insertBefore(wrapper, line);
          }
          wrapper.appendChild(line);

          const block = document.createElement('div');
          block.className = 'block-revealer';
          block.style.backgroundColor = blockColor;
          wrapper.appendChild(block);

          lines.current.push(line as HTMLDivElement);
          blocks.current.push(block);
        });
      });

      gsap.set(lines.current, { opacity: 0 });
      gsap.set(blocks.current, {
        scaleX: 0,
        transformOrigin: 'left center',
      });

      const createBlockRevealAnimation = (
        block: any,
        line: any,
        index: number,
      ) => {
        const tl = gsap.timeline({ delay: delay + index * stagger });

        tl.to(block, {
          scaleX: 1,
          duration: duration,
          ease: 'power4.inOut',
        });
        tl.set(line, { opacity: 1 });
        tl.set(block, { transformOrigin: 'right center' });
        tl.to(block, {
          scaleX: 0,
          duration: duration,
          ease: 'power4.inOut',
        });

        return tl;
      };

      if (animationOnScroll) {
        blocks.current.forEach((block, index) => {
          const tl = createBlockRevealAnimation(
            block,
            lines.current[index],
            index,
          );
          tl.pause();

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top 90%',
            once: true,
            onEnter: () => tl.play(),
          });
        });
      } else {
        blocks.current.forEach((block, index) => {
          createBlockRevealAnimation(block, lines.current[index], index);
        });
      }

      return () => {
        splitRefs.current.forEach((split) => split?.revert());

        const wrappers = containerRef.current?.querySelectorAll(
          '.block-line-wrapper',
        );
        wrappers?.forEach((wrapper) => {
          if (wrapper.parentNode && wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            wrapper.remove();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animationOnScroll, delay, blockColor, stagger, duration],
    },
  );

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
};

export default Copy;
