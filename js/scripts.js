/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$(document).ready(function() {
    setTimeout(function() {
      $(".cut-text").addClass("move");
    }, 400);




  });     
  
  document.addEventListener("DOMContentLoaded", function() {
    const lineContainer = document.getElementById('lineContainer');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lineContainer.classList.add('scrolled');
        }
      });
    });

    observer.observe(lineContainer);
  });