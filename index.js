// Navbar will scroll with you as you go down the page

// const stickyNav = document.querySelector(".nav-links")
// const observer = new IntersectionObserver(
// ({event}) => event.target.classlist.toggle("is-pinned", event.intersectionRatio < 1),
// { threshold: [1] }
// );

// observer.observe(stickyNav);

function toast() {}

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const images = document.querySelectorAll("slide");

let i = 0;

setInterval(function(){

  if(i == 0) {
    images[i].style.display = 'block';
  } else if(i == images.length ) {
    images[i - 1].style.display = 'none';
    images[0].style.display = 'block';
    i = 0;
  } else {
    images[i - 1].style.display = 'none';
    images[i].style.display = 'block';
  }
  
 i++;
}, 5000);

// Contact form logic
function sendMail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("textarea1").value,
  };

  const serviceId = "service_pj2hapz";
  const templateId = "template_xmmuxbb";

  emailjs.sendForm(serviceId, templateId, "#my-form").then(
    (response) => {
      console.log("Success", response.status, response.text);
      alert("Your message was sent!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("textarea1").value = "";
    },
    (error) => {
      console.log("Failed..", error);
      alert("Your message failed to send. Try again please!", error);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("textarea1").value = "";
    }
  );
}

// todo: Form properly sends to email but none of the fields work. Check Emailjs template to see where the issue is.

// Google Map
function initMap() {
  const stowe = { lat: 44.470598015856034, lng: -72.68630668847592 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: stowe,
    disableDefaultUI: true,
    zoomControl: true,
  });
  // Arrow marker on the map
  const marker = new google.maps.Marker({
    position: stowe,
    map: map,
  });
}
window.initMap = initMap;