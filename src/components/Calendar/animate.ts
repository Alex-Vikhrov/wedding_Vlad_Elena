// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

import { animateBlocks } from '@utils/animationBlocks';

// gsap.registerPlugin(ScrollTrigger);

// function animateCalendar() {
//   const blocks = document.querySelectorAll('.calendar-title, .calendar-subtitle__mont, .calendar-subtitle__year, .calendar, .day');

//   blocks.forEach((block) => {
//     gsap.from(block, {
//       opacity: 0,
//       y: 10,
//       duration: 3,
//       ease: 'circ.in',
//       scrollTrigger: {
//         trigger: block,
//         start: 'top 90%',
//         end: '+=80',
//         scrub: 1,
//       },
//     });
//   });
// }

const settings = {
  gsap: {
    y: 10,
  },
  scrollTrigger: {
    start: 'top 90%',
    end: '+=100',
  },
};

document.addEventListener('DOMContentLoaded', () =>
  animateBlocks(
    '.calendar-title, .calendar-subtitle__mont, .calendar-subtitle__year, .calendar, .day',
    settings
  )
);
