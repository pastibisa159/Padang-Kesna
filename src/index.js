import Siema from "siema";

// register service worker
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../sw.js')
          .then(function(registration) {
              console.log('Registration successful');
          })
          .catch(function(error) {
              console.log('Service worker registration failed');
          });
  }
  
// carousell for gallery
const gallery = new Siema({
  loop: true,
  duration: 500,
  perPage: {
    800: 2,
    1240: 3
  }
});

// gallery arrow listener
document
  .getElementById("galLeft")
  .addEventListener("click", () => gallery.prev());
document
  .getElementById("galRight")
  .addEventListener("click", () => gallery.next());

// carousell for review
const review = new Siema({
  selector: ".review__list",
  duration: 500,
  perPage: {
    800: 2,
    1240: 3
  },
  loop: true
});

// review arrow listener
document
  .getElementById("revLeft")
  .addEventListener("click", () => review.prev());
document
  .getElementById("revRight")
  .addEventListener("click", () => review.next());

// hide nav on scroll
const navBtn = document.getElementById("nav-check");
const nav = document.getElementsByClassName("nav")[0];
let prevScroll = window.pageYOffset;
window.addEventListener("scroll", () => {
  if (!navBtn.checked) {
    const currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {
      nav.style.top = "0";
    } else {
      nav.style.top = "-50px";
    }
    prevScroll = currentScroll;
  }
});

// google mpas initiator
window.initMap = () => {
  const mapElement = document.getElementById("mapid");
  window.map = new google.maps.Map(mapElement, {
    zoom: 16,
    center: {
      lat: -8.36601,
      lng: 115.467195
    },
    scrollwheel: false
  });
  window.marker = new google.maps.Marker({
    position: {
      lat: -8.36601,
      lng: 115.467195
    },
    map: window.map,
    animation: google.maps.Animation.DROP
  });
};

// mobile nav smoot scroll
Object.values(document.getElementsByClassName("nav-links")[0].children).forEach(
  e =>
    e.addEventListener("click", () => {
      navBtn.checked = false;
    })
);
