import { animateBlocks } from '@utils/animationBlocks';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  animateBlocks('.timing-day__title');
  // Анимация появления точек
  gsap.utils.toArray('.dot').forEach((dot: any) => {
    gsap.from(dot, {
      opacity: 0,
      duration: 10,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: dot,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
      },
    });
  });

  // Анимация появления иконок
  gsap.utils.toArray('.icon').forEach((icon: any, index) => {
    gsap.from(icon, {
      x: index % 2 === 0 ? -200 : 200,
      opacity: 0,
      duration: 10,
      delay: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: icon,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
      },
    });
  });

  // Анимация появления текстов
  gsap.utils.toArray('.text').forEach((text: any, index) => {
    gsap.from(text, {
      x: index % 2 === 0 ? 200 : -200,
      opacity: 0,
      duration: 10,
      delay: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: text,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
      },
    });
  });
});
