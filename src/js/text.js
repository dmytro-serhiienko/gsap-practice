import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// ! По словам - поки що краще що знайшов
// const titleSplit = new SplitType('.text__title', { types: 'words' });

// gsap.from(titleSplit.words, {
//   duration: 1,
//   y: 100,
//   rotationX: -90,
//   transformOrigin: '50% 100%',
//   opacity: 0,
//   stagger: 0.1,
//   ease: 'power2.out',
// });

// ! По словам декілька класів старт при 80%
// Анімуємо кілька елементів з різними класами
const titleSplit = new SplitType('.text__title, .text__dscr-1, .text__dscr-2', {
  types: 'words',
});

gsap.from(titleSplit.words, {
  scrollTrigger: {
    trigger: '.text__section',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
    markers: true, // Видали потім
  },
  duration: 1,
  y: 100,
  rotationX: -90,
  transformOrigin: '50% 100%',
  opacity: 0,
  stagger: 0.1,
  ease: 'power2.out',
});

//! BLUR
// const titleSplit = new SplitType('.text__title', { types: 'chars' });
// gsap.from(titleSplit.chars, {
//   duration: 1.5,
//   opacity: 0,
//   filter: 'blur(20px)',
//   stagger: 0.05,
//   ease: 'power2.out',
// });

//! Друкарка
// const titleSplit = new SplitType('.text__title', { types: 'chars' });

// gsap.from(titleSplit.chars, {
//   duration: 0.1,
//   opacity: 0,
//   stagger: 0.1,
//   ease: 'none',
// });

//! 3Д перевернення
// const titleSplit = new SplitType('.text__title', { types: 'chars' });
// gsap.from(titleSplit.chars, {
//   duration: 1,
//   rotationY: 180,
//   transformOrigin: '50% 50%',
//   opacity: 0,
//   stagger: 0.05,
//   ease: 'power2.out',
// });

// ! Хаотичне появлення
// const titleSplit = new SplitType('.text__title', { types: 'chars' });
// gsap.from(titleSplit.chars, {
//   duration: 1.2,
//   x: () => gsap.utils.random(-200, 200),
//   y: () => gsap.utils.random(-200, 200),
//   rotation: () => gsap.utils.random(-180, 180),
//   opacity: 0,
//   stagger: 0.03,
//   ease: 'power2.out',
// });
