//Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

//Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeheight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeheight;
});

//Arrow를 아래로 스크롤시 나타나게 처리함
const arrow = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeheight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});

//Navbar 토글버튼 클릭 처리
const NavbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  NavbarMenu.classList.toggle("open");
});

//Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
NavbarMenu.addEventListener("click", () => {
  NavbarMenu.classList.remove("open");
});
