// toggle method 

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}

// /////////////////// //
//        logo         //
// /////////////////// //

const t1 = new TimelineLite();

t1.fromTo('.logo', 1.5, {
    opacity : 0,
    x : 50,
    ease : Power2.easeOut,
}, {
    opacity : 1,
    x : -20,
})
// .to('.logo', 0.5, {
//     opacity: 1,
//     x : 0
// });

// /////////////////////// //
//       navigation        //
// /////////////////////// //

const t2 = new TimelineLite();

t2.fromTo('nav', 1.5, {
    opacity : 0,
    y : -50,
    ease : Power2.easeOut,
}, {
    opacity : 0.8,
    y : 25,
})
// .to('.nav', 0.5, {
//     opacity: 1,
//     y : 0
// });
// /////////////////////// //
//          images         //
// /////////////////////// //

const t3 = new TimelineLite();

t3.fromTo('.box', 1.5, {
    opacity : 0,
    x : 100, 
    ease : Power2.easeOut,
}, {
    opacity : 1,
    x : -40,
})
.to('.box', 0.5, {
    opacity: 1,
    x : 0
});

// //////////////////////// //
//       explore            //
// //////////////////////// //

const airlineArticle = document.querySelector('.airline')

const t4 = new TimelineLite();
t4.fromTo('.airline-article', 2, {
    opacity : 0,
    y : -500
}, {
    opacity : 1,
    y : 0
})

airlineArticle.addEventListener('click', function(){
    toggleTween(t4);
})

// //////////////////////// //
// smooth scroll animation  //
// //////////////////////// //

function smoothScroll(target, duration){
    var target = document.querySelector(target);
    // gives the targets left position based off of the window
    console.log("target is : " + target);
    var targetPosition = target.getBoundingClientRect().left;
    console.log("target's position : " + targetPosition);
    // the window
    var startPosition = window.pageXOffset;
    console.log("starting position : " + startPosition);

    var distance = targetPosition - startPosition;
    console.log("distance between target pos. and start pos. : " + distance);

    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition, distance, duration);
        window.scrollTo(run, 0);
        if(timeElapsed < duration) requestAnimationFrame(animation);
        window.scrollTo(run, 0); 
        console.log(`the run function equals ${run}`);
    }

    function ease(t,b,c,d){
        t /= d /2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
    console.log(targetPosition);
}
// //////////////////////// //
//    selecting elements    //
// //////////////////////// //
var sectionOne = document.querySelector('.sectionOne');
var sectionTwo = document.querySelector('.sectionTwo');
var sectionThree = document.querySelector('.sectionThree');
var sectionFour = document.querySelector('.sectionFour');
var sectionFive = document.querySelector('.sectionFive');
var sectionSix = document.querySelector('.sectionSix');

// calling the functions
sectionOne.addEventListener('click', function(){
    smoothScroll('.one', 1000);
})
sectionTwo.addEventListener('click', function(){
    smoothScroll('.two', 1000);
})
sectionThree.addEventListener('click', function(){
    smoothScroll('.three', 1000);
})
sectionFour.addEventListener('click', function(){
    smoothScroll('.four', 1000);
})
sectionFive.addEventListener('click', function(){
    smoothScroll('.five', 1000);
})
sectionSix.addEventListener('click', function(){
    smoothScroll('.six', 1000);
})

