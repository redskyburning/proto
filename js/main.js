function prepRem() {
	var vW = $(window).width();
	var vH = $(window).height();
	var vM = (vW < vH) ? vW : vH; 
	var rem = Math.round(vM / 10);
	$('html').css('fontSize',rem+'px');
	// Hide/Show forces reflow
	$('#app-root').show();
}

function prepContentHandlers(){
	$('.page a').click(function(event) {
		event.preventDefault();
		loadPage($(this).attr('href'));
	});
}

function loadPage(href){
	$('#app-content').load(href, function(){
		prepContentHandlers();
	
	});
	
}


urlBase = 'http://www.redskyburning.com/test.php';
urlBase = 'http://news.discovery.com.bwebb.dev-007.dp.discovery.com';
urlBase = 'http://news.discovery.com.bwebb.dev-007.dp.discovery.com/earth';

$(document).ready(function(){
	prepRem();
	
	$('#logo').click(function(){
		loadPage(urlBase);
	});
	
	$('.header-button').click(function(e){
		var tangoStr = $(this).attr('data-tango');
		var tango = $('#'+tangoStr);
		if(tango.hasClass('active')){
			$('.app-drawer.active').removeClass('active');
		} else {
			$('.app-drawer.active').removeClass('active');
			tango.addClass('active');
		}
	});
		loadPage(urlBase);
});