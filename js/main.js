function prepRem() {
	var vW = $(window).width();
	var vH = $(window).height();
	var vM = (vW < vH) ? vW : vH; 
	var rem = Math.round(vM / 10);
	$('html').css('fontSize',rem+'px');
	// Hide/Show forces reflow
	$('#app-root').show();
	$('#app-content').prepend('<p>vm: '+vM+'</p>');
	$('#app-content').prepend('<p>rem: '+rem+'</p>');
	$('#app-content').prepend('<p>fs: '+$('html').css('fontSize')+'</p>');
	$('#app-content').prepend('<p>min: '+$('#app-header').height()+'</p>');
}

$(document).ready(function(){
	prepRem();
});