import BlockText from '@/registry/components/split-text/block-text';

const BlockTextAnimation = () => {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8">
      <BlockText
        animationOnScroll={false}
        delay={0.5}
        blockColor="#3b82f6"
        stagger={0.1}
        duration={0.6}
      >
        <h1 className="text-4xl font-bold md:text-6xl">Beautiful Block</h1>
        <h1 className="text-4xl font-bold md:text-6xl">Text Reveal</h1>
        <h1 className="text-4xl font-bold md:text-6xl">Animation</h1>
      </BlockText>
    </div>
  );
};

export default BlockTextAnimation;
