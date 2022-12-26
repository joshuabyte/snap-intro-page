// @ts-nocheck
/* Storing the elements in variables. */
const featuresBtn = document.getElementById("nav-features");
const featuresMenu = document.querySelector(".features-container");
const companyBtn = document.getElementById("nav-company");
const companyMenu = document.querySelector(".company-container");
const burgerMenu = document.querySelector(".brg-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("mobile-close-icon");

/* Storing each arrow icon in variables. */
let arrowIconFeatures = document.getElementById("arrow-icon-features");
let arrowIconCompany = document.getElementById("arrow-icon-company");

/* A flag to manage arrow icon img change. One for each arrow icon. */
let isArrowDownDisplayedFt = true;
let isArrowDownDisplayedComp = true;

/* Adding an event listener to the featuresBtn and companyBtn. */
featuresBtn.addEventListener("click", toggleDesktopFeatures);
companyBtn.addEventListener("click", toggleDesktopCompany);
burgerMenu.addEventListener("click", toggleMobileMenu);
closeMenu.addEventListener("click", closeMobileMenu);

/**
 * If the arrow is down, change it to up, and vice versa
 */
function toggleArrowIconFeatures() {
  if (isArrowDownDisplayedFt) {
    arrowIconFeatures.src = "../assets/icons/icon-arrow-up.svg";
    isArrowDownDisplayedFt = false;
  } else {
    arrowIconFeatures.src = "../assets/icons/icon-arrow-down.svg";
    isArrowDownDisplayedFt = true;
  }
}

function toggleArrowIconCompany() {
  if (isArrowDownDisplayedComp) {
    arrowIconCompany.src = "../assets/icons/icon-arrow-up.svg";
    isArrowDownDisplayedComp = false;
  } else {
    arrowIconCompany.src = "../assets/icons/icon-arrow-down.svg";
    isArrowDownDisplayedComp = true;
  }
}

/**
 * If the featuresMenu exists, toggle the classList of the featuresMenu to grid-inactive, and toggle
 * the arrow icon.
 */
function toggleDesktopFeatures() {
  featuresMenu?.classList.toggle("grid-inactive");
  toggleArrowIconFeatures();
}
function toggleDesktopCompany() {
  companyMenu?.classList.toggle("grid-inactive");
  toggleArrowIconCompany();
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
function closeMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
