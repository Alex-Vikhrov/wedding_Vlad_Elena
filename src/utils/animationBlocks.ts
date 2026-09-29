import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animateBlocks = (selectors: string, settings: Record<string, any> = {}) => {
  const blocks = document.querySelectorAll(selectors);

  console.log(settings);
  

  blocks.forEach((block) => {
    gsap.from(block, {
      opacity: 0,
      y: 40,
      duration: 2,
      ease: 'circ.in',
      scrollTrigger: {
        trigger: block,
        start: 'top 80%',
        end: '+=120',
        scrub: 1,
        ...settings.scrollTrigger,
      },
      ...settings.gsap,
    });
  });
};

export { animateBlocks };
