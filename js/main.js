function prepRem() {
	var vW = $(window).width();
	var vH = $(window).height();
	var vM = (vW < vH) ? vW : vH; 
	var rem = vM / 100;
	$('html').css('fontSize',rem+'px');
	// Hide/Show forces reflow
	$('#app-root').show();
}

$(document).ready(function(){
	prepRem();
});