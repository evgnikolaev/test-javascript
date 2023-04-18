const tween = gsap.to('.selector', {
    duration: 2,
    opacity: 0.8,
    background: 'orange',
    scale: 0.2,
    paused: true,
    stagger: {
        each: .5,
        from: 'center',
        grid: 'auto',
        axis: 'x'
    },
    // обработчики
    onComplete: function () { console.log('анимация завершена'); },
    onRepeat: function () { console.log('анимация повторяется'); },
    onReverseComplete: function () { console.log('Обратная анимация завершена'); },
    onStart: function () { console.log('анимация стартует'); },
    onUpdate: function () { console.log('Выполнен один тик (кадр, ход) анимации'); },
});



