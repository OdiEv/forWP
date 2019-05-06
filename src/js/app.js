import $ from 'jquery';

$(document).ready( function () {

	const urlPage = window.location.href;
	const mainMenuItem = $('.js-mm-item');
	const body = $('body');
	const footer = $('.js-footer');
	const mainMenu = $('.js-mm');
	const mainMenuToggle = $('.js-mm-toggle');

	mainMenuItem.each(function() {
		if (urlPage == (this.href)) {
			$(this).addClass('active');
		}
	});

	mainMenuToggle.click(function(){
		mainMenu.slideToggle();
	});

// // ----------------ScrollWidth-------------------

// 	var div = document.createElement('div');

// 	div.style.overflowY = 'scroll';
// 	div.style.width = '50px';
// 	div.style.height = '50px';
// 	div.style.visibility = 'hidden';

// 	document.body.appendChild(div);
// 	var scrollWidth = div.offsetWidth - div.clientWidth;
// 	document.body.removeChild(div);

// // -----------------------------------------------

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

});