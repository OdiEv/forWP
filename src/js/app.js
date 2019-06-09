import $ from 'jquery';
import 'slick-carousel';

$(document).ready( function () {

	const urlPage = window.location.href;
	const mainMenuItem = $('.js-mm-item');
	const body = $('body');
	const footer = $('.js-footer');
	const mainMenu = $('.js-mm');
	const mainMenuToggle = $('.js-mm-toggle');
	const filterBar = $('.js-filter');

	mainMenuItem.each(function() {
		if (urlPage == (this.href)) {
      $(this).addClass('active-menu');
		}
		if (urlPage.indexOf('index.html') > -1) {
			filterBar.css('display', 'block');
		} else {
			if (urlPage.indexOf('.html') > -1) {
				filterBar.css('display', 'none');
			} else {
				filterBar.css('display', 'block');
			}
		}
	});

	mainMenuToggle.click(function(){
		mainMenu.slideToggle();
	});

	if ($(window).width() < 768) {
		body.css('padding-bottom', footer.height());
	} else {
		body.css('padding-bottom', 0);
	}

  $(window).resize(function() {
    
    if ($(window).width() < 768) {
			body.css('padding-bottom', footer.height());
		} else {
			body.css('padding-bottom', 0);
		}

		if($(window).width() > 768 && mainMenu.is(':hidden')) {
      mainMenu.removeAttr('style');
    }

  });

//------------------Filter---------------------------
  
  const btnContainer = document.getElementById("myBtnContainer");
  const btns = btnContainer.getElementsByClassName("js-filter-btn");
  const portfolio = document.getElementsByClassName("js-portfolio");

  function w3AddClass(element, name) {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }

  function w3RemoveClass(element, name) {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      const current = document.getElementsByClassName("active-filter");
      current[0].className = current[0].className.replace(" active-filter", "");
      this.className += " active-filter";
      if (btns[i].dataset.filter == "all") btns[i].dataset.filter = "";
      for (let j = 0; j < portfolio.length; j++) {
        w3RemoveClass(portfolio[j], "show");
        if (portfolio[j].className.indexOf(btns[i].dataset.filter) > -1) w3AddClass(portfolio[j], "show")
      }
    });
  }

  // ----------Slider----------------------------------------
  const workSlider = $('.js-slider-work');

  workSlider.slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false
  });

});