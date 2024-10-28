const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function effect() {
  let elements = document.querySelectorAll(".elements");
  let page2 = document.querySelector(".page2");

  elements.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      let img = elem.getAttribute("data-image");
      page2.style.backgroundImage = `url(${img})`;
    });
    elem.addEventListener("mouseleave", function () {
      page2.style.backgroundImage = `none`;
    });
  });
}
effect();

let btn = document.querySelector(".top h5")
btn.addEventListener("click",function(){
  scroll.scrollTo(0);
})