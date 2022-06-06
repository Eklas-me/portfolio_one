$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


let professonal_skill = document.querySelector("#professonal-skill");
let secendSkill = document.querySelector(".skill");
let education  = document.querySelector("education");



professonal_skill.onclick = () =>{
    secendSkill.classList.add("skill-active");
    education.classList.remove("remove")
}