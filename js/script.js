/* ============================================================
   Nawfal Ahmed Qadri — Portfolio JavaScript
   CSC-240 Final Project | Track 1

   This file adds four pieces of interactivity:
     1. Dark/light theme toggle (remembered with localStorage)
     2. Mobile hamburger menu open/close
     3. Typing effect in the hero section
     4. Scroll-reveal animations (IntersectionObserver)
   ...plus a tiny helper that keeps the footer year current.

   Because the <script> tag sits at the very end of <body> in
   index.html, every element we look up here already exists.
   ============================================================ */


/* ------------------------------------------------------------
   1. DARK / LIGHT THEME TOGGLE
   How it works:
   - The CSS defines two sets of color variables: the defaults on
     :root (light), and overrides on [data-theme="dark"].
   - So ALL this JavaScript has to do is add or remove
     data-theme="dark" on the <html> element.
   - localStorage is a small key→value store the browser keeps for
     this site, so the choice survives refreshes and revisits.
   ------------------------------------------------------------ */

const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement; // the <html> element

// On page load: restore the saved theme, if there is one.
// localStorage.getItem returns null when the key doesn't exist,
// so first-time visitors simply get the default (light) theme.
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  htmlEl.setAttribute("data-theme", "dark");
}

// When the ☀️/🌙 button is clicked, flip the theme.
themeToggle.addEventListener("click", () => {
  // hasAttribute returns true if we're currently in dark mode
  const isDark = htmlEl.hasAttribute("data-theme");

  if (isDark) {
    htmlEl.removeAttribute("data-theme");     // back to light
    localStorage.setItem("theme", "light");   // remember choice
  } else {
    htmlEl.setAttribute("data-theme", "dark"); // switch to dark
    localStorage.setItem("theme", "dark");
  }
});


/* ------------------------------------------------------------
   2. MOBILE HAMBURGER MENU
   On screens ≤768px the CSS hides the nav links (max-height: 0).
   Clicking the hamburger toggles the .open class, which the CSS
   uses to slide the menu down (and to morph the bars into an X).
   ------------------------------------------------------------ */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  // classList.toggle adds the class if missing, removes it if present
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
});

// Quality-of-life: when a menu link is tapped, close the menu so it
// doesn't stay covering the section the user just navigated to.
// querySelectorAll returns ALL matching elements; forEach loops them.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  });
});


/* ------------------------------------------------------------
   3. TYPING EFFECT (hero section)
   Types each phrase character by character, pauses, deletes it,
   then moves to the next phrase — forever.

   Technique: setTimeout(fn, delay) runs a function ONCE after a
   delay. Our function "type" always schedules itself again at the
   end, creating a loop whose speed we can vary (typing is faster
   than an even rhythm would feel, deleting is faster still).
   ------------------------------------------------------------ */

const typedTextEl = document.getElementById("typedText");

// The phrases to cycle through — easy to edit!
const phrases = [
  "CS & Math student",
  "Java developer",
  "problem solver",
  "cricketer",
];

let phraseIndex = 0;   // which phrase we're on
let charIndex = 0;     // how many characters are currently shown
let isDeleting = false; // are we typing forward or deleting?

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--;       // remove one character
  } else {
    charIndex++;       // add one character
  }

  // slice(0, n) returns the first n characters of the phrase
  typedTextEl.textContent = currentPhrase.slice(0, charIndex);

  // Default speeds (in milliseconds)
  let delay = isDeleting ? 45 : 95;

  if (!isDeleting && charIndex === currentPhrase.length) {
    // Finished typing the whole phrase → pause, then start deleting
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Finished deleting → advance to the next phrase.
    // The % (modulo) wraps the index back to 0 after the last phrase,
    // e.g. (3 + 1) % 4 = 0 — that's what makes the loop infinite.
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 350;
  }

  setTimeout(type, delay); // schedule the next "frame"
}

type(); // kick off the loop


/* ------------------------------------------------------------
   4. SCROLL-REVEAL ANIMATIONS
   Every section with class="reveal" starts invisible (see the
   .reveal rule in CSS). An IntersectionObserver is a built-in
   browser API that efficiently watches elements and tells us when
   they enter the viewport — much better than listening to every
   scroll event and measuring positions ourselves.
   ------------------------------------------------------------ */

const observer = new IntersectionObserver(
  // This callback runs whenever a watched element crosses the
  // visibility threshold. "entries" is the list of changes.
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The element is now on screen → trigger the CSS animation
        entry.target.classList.add("visible");
        // Stop watching it; the animation only needs to run once
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 } // fire when 15% of the section is visible
);

// Attach the observer to every .reveal section on the page
document.querySelectorAll(".reveal").forEach((section) => {
  observer.observe(section);
});


/* ------------------------------------------------------------
   5. AUTO-UPDATING FOOTER YEAR
   new Date() is "now"; getFullYear() pulls out the year, so the
   copyright never goes stale.
   ------------------------------------------------------------ */

document.getElementById("year").textContent = new Date().getFullYear();
