import './style.css';
import './modernizr';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesloaded from 'imagesloaded';
gsap.registerPlugin(ScrollTrigger);

function runAnimation() {
  const offsetX = 50;
  const offsetY = 25;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#doors',
        start: 'top top',
        end: '+=4000',
        scrub: true,
        pin: true,
      },
    })
    .to('#doorLeft', { x: '-50%' }, 'doorMovement')
    .to('#doorRight', { x: '50%' }, 'doorMovement')
    .to('#bridge', { opacity: 1 }, '<doorMovement')
    .fromTo(
      '#captainLeft',
      { x: offsetX, y: -offsetY },
      { x: 0, y: 0, duration: 1, delay: 0.5, ease: 'expo' },
      'doorMovement-=50%'
    )
    .fromTo(
      '#captainRight',
      { x: -offsetX, y: -offsetY },
      { x: 0, y: 0, duration: 1, delay: 0.5, ease: 'expo' },
      'doorMovement-=50%'
    )
    .fromTo(
      '#hologram',
      {
        'clip-path': 'inset(100% 0% 0% 0%)',
        opacity: 0,
      },
      {
        'clip-path': 'inset(0% 0% 0% 0%)',
        opacity: 1,
      },
      'doorMovement+=40%'
    )
    .to('#twitterIcon', { opacity: 1, duration: 10 }, '<doorMovement+=50%');
}

imagesloaded('#animationWrapper', () => {
  document.getElementById('animationWrapper').classList.remove('hidden');
  setTimeout(runAnimation, 1000);
});
