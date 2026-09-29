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
    '.information__title, .information__text, .information__text, .information__tel, .information__text',
    settings
  )
);
