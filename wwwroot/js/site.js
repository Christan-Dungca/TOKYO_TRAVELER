﻿var image = document.querySelector('img');


// /////////////////// //
// header text appears //
// /////////////////// //

const t1 = new TimelineLite();

t1.fromTo('.header-main-title', 2, {
    opacity : 0,
    x : 100,
    ease : Power2.easeOut,
}, {
    opacity : 0.8,
    x : -50
})
.to('.header-main-title', 1, {
    opacity: 1,
    x : 0
});

const t2 = new TimelineLite();

// /////////////////////// //
// header sub text appears //
// /////////////////////// //

t2.fromTo('.header-sub-title', 2, {
    opacity : 0,
    x : 100,
    ease : Power2.easeOut
}, {
    opacity : 0.8, 
    x : 50
})
.to('.header-sub-title', 1, {
    opacity : 1,
    x : 0
})

const t3 = new TimelineLite();

t3.fromTo('.journey', 2, {
    opacity : 0,
    y : 100,
    ease : Power2.easeOut
}, {
    opacity : 1,
    y : 0,
    ease : Power2.easeOut
});