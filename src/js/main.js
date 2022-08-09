import "../scss/styles.scss";

import Tab from "bootstrap/js/dist/tab";

import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/modal";

// const triggerTabList = document.querySelectorAll("#myTab button");
// triggerTabList.forEach((triggerEl) => {
//   const tabTrigger = new bootstrap.Tab(triggerEl);

//   triggerEl.addEventListener("click", (event) => {
//     event.preventDefault();
//     tabTrigger.show();
//   });
// });

// const myModal = new bootstrap.Modal(document.getElementById("myModal"), options);
// const myModalAlternative = new bootstrap.Modal("#myModal", options);

function navcolor() {
  var navigasi = document.getElementById("navigasi");
  var scrollValue = window.scrollY;
  if (scrollValue < 10) {
    navigasi.classList.remove("navcolor");
  } else {
    navigasi.classList.add("navcolor");
  }
}

window.addEventListener("scroll", navcolor);

const elementclose = document.getElementsByClassName("overlay");

for (let i = 0; i < elementclose.length; i++) {
  elementclose[i].addEventListener("click", function () {
    let url = window.location.href.substr(0, window.location.href.indexOf("#"));
    window.location = url;
  });
}
