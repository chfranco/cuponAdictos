// slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//open terminos

const terminos = document.querySelector(".abrirTerminos")
const modal = document.querySelector(".infoTerminos")
const body = document.querySelector("body")


terminos.addEventListener('click', mostrarModal)

modal.addEventListener('click', ()=>{
    modal.classList.remove('activo')
    body.style.overflow = 'scroll'
}
)

function mostrarModal(){
    if(modal.classList.contains('activo')){
        modal.classList.remove('activo')
    }else{
        modal.classList.add('activo')
        body.style.overflow = 'hidden'
    }
}

