const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

const main = document.querySelector('#main');
const cursor = document.querySelector('#cursor');
const nav = document.querySelector("nav");
const head = document.querySelector(".s1");
const head2 = document.querySelector(".s2");
const head3 = document.querySelector(".s3");

main.addEventListener("mousemove", function(event) {
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,  // Adjusted duration for smoother movement
        ease: "power2.out"  // Added easing for smoother animation
    });
});

nav.addEventListener("mouseenter", function() {
    gsap.to(cursor, {
        opacity: 0
    });
});

nav.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        opacity: 1
    });
});

head.addEventListener("mouseenter", function() {
    // Hide the real cursor
    document.body.style.cursor = 'none';
    gsap.to(cursor, {
        scale: 7,
        duration: 1,  // Adjusted duration for smoother scaling
        ease: "power2.out"  // Added easing for smoother animation
    });
});

head.addEventListener("mouseleave", function() {
    // Show the real cursor
    document.body.style.cursor = 'auto';
    gsap.to(cursor, {
        scale: 1,
        duration: 1,  // Adjusted duration for smoother scaling
        ease: "power2.out"  // Added easing for smoother animation
    });
});
head2.addEventListener("mouseenter", function() {
    // Hide the real cursor
    document.body.style.cursor = 'none';
    gsap.to(cursor, {
        scale: 7,
        duration: 1,  // Adjusted duration for smoother scaling
        ease: "power2.out"  // Added easing for smoother animation
    });
});

head2.addEventListener("mouseleave", function() {
    // Show the real cursor
    document.body.style.cursor = 'auto';
    gsap.to(cursor, {
        scale: 1,
        duration: 1,  // Adjusted duration for smoother scaling
        ease: "power2.out"  // Added easing for smoother animation
    });
});
head3.addEventListener("mouseenter", function() {
    // Hide the real cursor
    document.body.style.cursor = 'none';
    gsap.to(cursor, {
        scale: 7,
        duration: 1,  // Adjusted duration for smoother scaling
        ease: "power2.out"  // Added easing for smoother animation
    });
});

head3.addEventListener("mouseleave", function() {
    // Show the real cursor
    document.body.style.cursor = 'auto';
    gsap.to(cursor, {
        scale: 1,
        duration: 1,  // Adjusted duration for smoother scaling
        ease: "power2.out"  // Added easing for smoother animation
    });
});
