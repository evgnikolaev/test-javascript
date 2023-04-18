// stagger - шататель или колебатель

gsap.to('.selector', {
    duration: 2,
    opacity: 0.8,
    background: 'orange',
    scale: 0.2,
    stagger: {
        each: .5,
        from: 'center',
        grid: 'auto', // позволяет определить где находится центр, и начинать анимацию с нее
        // grid:[13,12] // можно указать полпожение
        axis:'x'
    }
});