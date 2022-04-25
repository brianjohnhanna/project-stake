import './style.css';
import './modernizr';
import { gsap } from 'gsap';
import imagesloaded from 'imagesloaded';

function doors() {
  gsap.to('#doorLeft', { x: '-100%', duration: 30, ease: 'elastic' });
  gsap.to('#doorRight', { x: '100%', duration: 30, ease: 'elastic' });
  gsap.to('#bridge', { opacity: 1, delay: 0.1 });
}

function captains() {
  const offsetX = 50;
  const offsetY = 25;
  gsap.fromTo(
    '#captainLeft',
    { x: offsetX, y: -offsetY },
    { x: 0, y: 0, duration: 6, delay: 0.5, ease: 'expo' }
  );
  gsap.fromTo(
    '#captainRight',
    { x: -offsetX, y: -offsetY },
    { x: 0, y: 0, duration: 6, delay: 0.5, ease: 'expo' }
  );
}

function runAnimation() {
  doors();
  captains();
}

imagesloaded('#animationWrapper', () => {
  document.getElementById('animationWrapper').classList.remove('hidden');
  setTimeout(runAnimation, 1000);
});
