
// jQuery initialization for the hamburger mobile menu and the hero-image slider

 $(document).ready(function() {
    $('.sidenav').sidenav();
  }); 
// Navbar will scroll with you as you go down the page

// const stickyNav = document.querySelector(".nav-links")
// const observer = new IntersectionObserver(
// ({event}) => event.target.classlist.toggle("is-pinned", event.intersectionRatio < 1),
// { threshold: [1] }
// );

// observer.observe(stickyNav);

const buttons = document.querySelectorAll("[data-carousel-button]")


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1 
        const slides = button.closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})

var counter = 1;
setInterval(function() {
const imgSlides = document.getElementsByClassName("slide");
counter++;
if (counter > 4){
    counter=1;
}
}, 5000);

// Map for the Footer

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const stowe = { lat: 44.470598015856034, lng: -72.68630668847592 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: stowe,
      disableDefaultUI:true,
      zoomControl:true,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: stowe,
      map: map,
    });
  }
  
  window.initMap = initMap;