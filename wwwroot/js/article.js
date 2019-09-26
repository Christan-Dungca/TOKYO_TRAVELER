// toggle tween to play and be reversed

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
.to('.nav', 0.5, {
    opacity: 1,
    y : 0
});

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
//  explore article section //
// //////////////////////// //

// for the airline article section

const airlineExplore = document.querySelector('.airline')

const t4 = new TimelineLite({paused : true, reversed: true});


t4.to('.logo', 1.5, {
    opacity : 1,
    // x : -1000,
    ease : Power2.easeOut
})
.to('nav', 2, {
    opacity : 1,
    // x : 1000,
    ease : Power2.easeOut
}, '-= 1.5')
.to('.content-wrapper', 2, {
    opacity : 0,
    y : -1000,
    ease : Power2.easeOut
}, '-= 1')
.fromTo('.airline-article', 2, {
    opacity : 0,
    x : -1500,
    ease : Power2.easeOut
}, {
    opacity : 1,
    x : 0
}, "-= 1")

airlineExplore.addEventListener('click', () => {
    // t1.play()
    toggleTween(t4)
});

// //////////////////////// //
//  explore housing section //
// //////////////////////// //

const housingExplore = document.querySelector('.housing')

const t5 = new TimelineLite({paused : true, reversed : true});

t5.to('.logo', 1.5, {
    opacity : 0,
    x : -1000,
    ease : Power2.easeOut
})
.to('nav', 2, {
    opacity : 0,
    x : 1000,
    ease : Power2.easeOut
}, '-= 1.5')
.to('.content-wrapper', 2, {
    opacity : 0,
    y : -1000,
    ease : Power2.easeOut
}, '-= 1')
.fromTo('.housing-article', 2, {
    opacity : 0,
    y : -100,
    ease : Power2.easeOut
}, {
    opacity : 1,
    y : 0
})

housingExplore.addEventListener('click', () => {
    toggleTween(t5)
});


// //////////////////////// //
// smooth scroll animation  //
// //////////////////////// //

function smoothScroll(target, duration){
    var target = document.querySelector(target)
    var targetPosition = target.getBoundingClientRect().left;
    var startPosition = window.pageXOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition, distance, duration);
        window.scrollTo(run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
        console.log(`the run function equals ${run}`);
    }

    Math.ease = function (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
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
    smoothScroll('.four', 1000);
});
     
 function scrollTo(element, to, duration) {
     var start = element.scrollTop,
         change = to - start,
         currentTime = 0,
         increment = 20;
         
     var animateScroll = function(){        
         currentTime += increment;
         var val = Math.easeInOutQuad(currentTime, start, change, duration);
         element.scrollTop = val;
         if(currentTime < duration) {
             setTimeout(animateScroll, increment);
         }
     };
     animateScroll();
 }
 
 //t = current time
 //b = start value
 //c = change in value
 //d = duration
 Math.easeInOutQuad = function (t, b, c, d) {
   t /= d/2;
     if (t < 1) return c/2*t*t + b;
     t--;
     return -c/2 * (t*(t-2) - 1) + b;
 };

 scrollTo('.one', '.six', 1000 )