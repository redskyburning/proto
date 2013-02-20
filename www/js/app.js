/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	
	currentPage0:0,
	
	prepRem: function(){
		var vW = $(window).width();
		var vH = $(window).height();
		var vM = (vW < vH) ? vW : vH; 
		var rem = vM / 10;
		this.vmin = vM;
		$('html').css('fontSize',rem+'px');
	},
	
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
	slideStack: function(pageNum) {
		var newLeft = (pageNum * -1 * this.vmin)+'px';
		//$('#app-stack').css('left',(pageNum * -1 * this.vmin)+'px');
		//$('#app-stack').animate({'left':newLeft},2,'linear');
		$('#app-stack').css('-webkit-transform','translateX('+newLeft+')');
		console.log('translateX('+newLeft+'px)');
	},
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);

        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    },

    run: function() {
		app.prepRem();
        this.bind();
    }
};

var myScroll;
function loaded() {
	myScroll = new iScroll('current-page');
}

function prepRem() {
}

$(document).ready(function(){
		
		var numPages = 3;
		for(i=0; i < numPages; i++){
			$('#app-stack').append($('#test-page').html());
		}
		
		var vpOut = 'Viewport: '+$(window).width() + ' / ' + $(window).height();
		$('.output-tango').html(vpOut);
		
		$('.page:first-child').attr('id','current-page');
		//loaded();

		$('.fwd').click(function(){
			app.slideStack(++app.currentPage0);
		});
		$('.bck').click(function(){
			app.slideStack(--app.currentPage0);
		});
		
		$('.css-trans').click(function(){
			var thisClass = $(this).hasClass('active');
			console.log(thisClass);
			if(thisClass){
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});
		
		$('.js-trans').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				var newLeft = '0px';
			} else {
				$(this).addClass('active');
				var newLeft = '600px';
			}
			$(this).animate({'left':newLeft},.5);
		});
});

