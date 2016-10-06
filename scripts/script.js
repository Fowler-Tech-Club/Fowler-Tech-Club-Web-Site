
var sidenav_height;

$(function(){
	sidenav_height = $(window).height();
});

function openNav() {
	document.getElementById("mainSideNav").style.width = "250px";
	document.getElementById("mainSideNav").style.opacity = "1";
}

function closeNav() {
	
	document.getElementById("mainSideNav").style.width = "0px";
	document.getElementById("mainSideNav").style.opacity = "0";
}

$(document).ready(function(){

	document.getElementById('mainSideNav').style.height = sidenav_height + 'px';

	$('#playMusic').click(function(){
		$('#music').trigger('play');
		$(this).css('display', 'none');
		$('#pauseMusic').css('display', 'block');
	});

	$('#pauseMusic').click(function(){
		$('#music').trigger('pause');
		$(this).css('display', 'none');
		$('#playMusic').css('display', 'block');
	});

	$('.item').each(function(i){
		setTimeout(function(){
			$('.item').eq(i).addClass('is-visible');
		}, 400 * i);
	});
});
