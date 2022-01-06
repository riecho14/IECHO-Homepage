const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*======================== Show Menu ========================*/
if(navToggle)
{
  navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu")
  })
}
/*===== MENU HIDDEN =====*/
if(navClose)
{
  navClose.addEventListener('click', () => {
    navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
  const header = document.getElementById("header")
  // when the scroll is greater than 80 viewport height, add the class scroll header to the tag header
  if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*======================== Partner Swipper ========================*/
var swiper = new Swiper(".partner-wrapper", {
    loop: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*=============== Portofolio Item Filter ===============*/
const filterContainer = document.querySelector(".portofolio-filter-inner"),
filterBtns = filterContainer.children,
totalFilterBtn = filterBtns.length,
portofolioItems = document.querySelectorAll(".portofolio-item"),
totalportofolioItem = portofolioItems.length;

for(let i=0; i<totalFilterBtn; i++)
{
  filterBtns[i].addEventListener("click", function()
  {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for(let k=0; k<totalportofolioItem; k++)
    {
      if(filterValue === portofolioItems[k].getAttribute("data-category"))
      {
        portofolioItems[k].classList.remove("hide");
        portofolioItems[k].classList.add("show");
      }
      else
      {
        portofolioItems[k].classList.add("hide");
        portofolioItems[k].classList.remove("show");
      }
      if(filterValue === "all")
      {
        portofolioItems[k].classList.remove("hide");
        portofolioItems[k].classList.add("show");
      }
    }
  })
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter()
{
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute("id");
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
    }
    else
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
  })
}