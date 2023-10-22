window.addEventListener("scroll", function(){
    const header = document.querySelector("header");

    if (window.scrollY > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal({
    distance:'40px',
    duration:1000,
    delay:200,
    reset:true
});
sr.reveal('.hero-text', {origin:'top'});
sr.reveal('.about-img, .service-item, .about-text', {origin:'bottom'});
sr.reveal('.about-text h2, .text-center, .right-contact h2', {origin:'top'});
sr.reveal('.left-hire', {origin:'left'});
sr.reveal('.right-hire', {origin:'right'});
sr.reveal('.contact', {origin:'top'});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
function validateName(){
  var name = document.getElementById("contact-name").value;

  if(name.length==0){
    nameError.innerHTML = "Name is required";
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML ="Write full name";
    return false;
  }
  nameError.innerHTML = "<i class='bx bx-check'></i>";
  return true;
}
function validateEmail(){
  var email = document.getElementById('contact-email').value;

  if(email.length==0){
    emailError.innerHTML = "Email is required";
    return false;
  }
  if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)){
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = "<i class='bx bx-check'></i>";
  return true;
}
function validateMessage(){
  var message = document.getElementById('contact-message').value;

  if(message.length==0){
    messageError.innerHTML = "Message is required";
    return false;
  }
  messageError.innerHTML = "<i class='bx bx-check'></i>";
  return true;
}
function validateForm(){
  if(!validateName() || !validateEmail() || !validateMessage()){
    submitError.style.display='block';
    submitError.innerHTML ="Please fix error to submit";
    setTimeout(function(){
      submitError.style.display = 'none';
    }, 3000)
    return false;
  }
  return true;
}
