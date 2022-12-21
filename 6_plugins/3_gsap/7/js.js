const tween = gsap.timeline({ repeat: 0, repeatDelay: 1 });

tween.to('h1', {
    x: 0,
    ease: 'bounce',
    duration: 2
});

tween.to('footer', {
    x: 0,
    ease: 'bounce',
    duration: 2
}, '-=1'); // (- 1 секунда) смещение анимации на одну секунду после начала анимации заголовка

tween.to('.selector', {
    y: 0,
    opacity: 1,
    scale: 1,
    ease: 'bounce',
    stagger: 0.05
}, '-=1');

tween.to('h1', {
    fontSize: '4rem',
    color: 'rgb(136,206,2)'
}, '+=1');

tween.to('footer', {
    rotation: '-10'
}, '-=1');
