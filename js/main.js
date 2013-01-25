function prepRem() {
	var vW = $(window).width();
	var vH = $(window).height();
	var vM = (vW < vH) ? vW : vH; 
	var rem = Math.round(vM / 10);
	$('html').css('fontSize',rem+'px');
	// Hide/Show forces reflow
	$('#app-root').show();
}

function loadPage(href){
	$('#app-content').load(urlBase);
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', urlBase);
	xhr.onreadystatechange = function () {
	  if (this.status == 200 && this.readyState == 4) {
		console.log('response: ' + this.responseText);
	  }
	};
	xhr.send();
}


urlBase = 'http://www.redskyburning.com/test.php';
urlBase = 'http://news.discovery.com.bwebb.dev-007.dp.discovery.com';

$(document).ready(function(){
	prepRem();
	
	$('#logo').click(function(){
		loadPage();
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
		loadPage();
});