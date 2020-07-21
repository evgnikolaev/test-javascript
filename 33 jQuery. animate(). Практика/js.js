/*

	33 jQuery. animate(). Практика

*/

function scrolwlTo(top) {
	$('html').animate({
		scrollTop: top  // ?scrollTop
	}, 1000);
}


$('.fixed a').on('click', function (e) {
	e.preventDefault();
	var idEl = $(this).attr('href');
	var coord = $(idEl).offset().top;
	var menyHeight = $('.fixed').height();
	scrolwlTo(coord - menyHeight);
});