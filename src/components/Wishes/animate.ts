import { animateBlocks } from '@utils/animationBlocks';

const settings = {
  gsap: {
    y: 30,
  },
  scrollTrigger: {
    start: 'top 82%',
    end: '+=100',
  },
};

document.addEventListener('DOMContentLoaded', () =>
  animateBlocks(
    '.wishes__title, .wishes__subtitle, .wishes__description',
    settings
  )
);
