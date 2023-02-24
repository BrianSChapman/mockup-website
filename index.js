
// jQuery initialization for the hamburger mobile menu and the hero-image slider

//   $(document).ready(function() {
//     $('.sidenav').sidenav();
//     $('.slider').slider({ 
//         fullWidth: true, 
//         indicators: true });
//   });  


// Navbar will scroll with you as you go down the page

// const stickyNav = document.querySelector(".nav-links")
// const observer = new IntersectionObserver(
// ({event}) => event.target.classlist.toggle("is-pinned", event.intersectionRatio < 1),
// { threshold: [1] }
// );

// observer.observe(stickyNav);

// Slider for the hero image
// todo: Figure out why this slider doesn't work. This is from w3 schools howto _js_slideshow

showSlides = () => {

    let slideIndex = 1;
showSlides(slideIndex);

 plusSlides = (n) => {
    showSlides(slideIndex += n);
}

currentSlide =(n) => {
    showSlides(slideIndex = n);
}
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n > 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideindex-1].className += " active";
}




// function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     const dots = document.getElementsByClassName("dot");
//     for (i=0; i < slides.length, i++;) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if ( slideIndex > slides.length) { slideIndex = 1 } 
//         slides[slideIndex-1].style.display = "block";
//         setTimeout(showSlides, 8000);
//     }


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