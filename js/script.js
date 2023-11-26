let meno = document.getElementById("meno");
let sub = document.getElementById("sub");
let close1 = document.getElementById("close");
meno.addEventListener("click",function(){
  sub.style.display="block"
})
close1.addEventListener("click",function(){
  sub.style.display="none"
})

let sliders = document.querySelectorAll(".sliderContainer>img");

let sliderCounter = 0;
function hideElements() {
  sliders.forEach((element) => {
    element.className = "hide";
  });
}
hideElements();
function callSlider() {
  setTimeout(moveSlider, 3500);
}
function moveSlider() {
  if (sliderCounter < sliders.length) {
    hideElements();
    if (sliderCounter == 0) {
      sliders[sliders.length - 1].classList.remove("hide");
      sliders[1].classList.remove("hide");
      sliders[0].classList.remove("hide");
      sliders[sliders.length - 1].classList.add("prev");
      sliders[1].classList.add("next");
    } else if (sliderCounter == sliders.length - 1) {
      sliders[sliders.length - 1].classList.remove("hide");
      sliders[0].classList.remove("hide");
      sliders[sliders.length - 2].classList.remove("hide");
      sliders[sliders.length - 2].classList.add("prev");
      sliders[0].classList.add("next");
    } else {
      sliders[sliderCounter].classList.remove("hide");
      sliders[sliderCounter + 1].classList.remove("hide");
      sliders[sliderCounter - 1].classList.remove("hide");
      sliders[sliderCounter + 1].classList.add("next");
      sliders[sliderCounter - 1].classList.add("prev");
    }
    sliderCounter++;
    callSlider();
  } else {
    sliderCounter = 0;
    moveSlider();
  }
}
moveSlider();
