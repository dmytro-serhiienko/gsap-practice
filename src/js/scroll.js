// ? JSAP SCROLL
// ІМПОРТУЄМО СТАРТОВИЙ ПАКЕТ
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// gsap.to('.wrap__1', {
//   scrollTrigger: {
//     trigger: '.wrap__1', // Елемент, який запускає анімацію
//     start: 'top 80%', // Коли верх елемента досягне 80% висоти вікна
//     end: 'bottom 20%', // Коли низ елемента досягне 20% висоти вікна
//     scrub: true, // Анімація прив'язана до скролу
//     markers: true, // Показує маркери для дебагу (видали потім)
//   },
//   x: 500,
//   duration: 2,
// });

//! Плавна поява при скролі
document.querySelectorAll('.container > div').forEach(wrap => {
  gsap.from(wrap, {
    scrollTrigger: {
      trigger: wrap,
      start: 'top 80%',
      end: 'bottom 15%',
      toggleActions: 'play none none reverse',
    },
    x: -100,
    opacity: 0,
    duration: 1,
  });
});
