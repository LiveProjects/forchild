$(document).ready(function(){
	$("#reg").bind('click',function(){
		$(this).next().toggle();
		})
	$("#log").click(function(){
		$("#header").fadeIn();
		$("#header").nextAll().css('opacity','0.2');
	})
	
	$("#header").find("i").click(function(){
		$(this).parent().fadeOut();
		$(this).parent().nextAll().css('opacity','1');
		})
    $("#reg").bind('click',function(){
		$(this).next().toggle();
		})
	$("#log").click(function(){
		$("#header").fadeIn();
		$("#header").nextAll().css('opacity','0.2');
	})
	$("#header").find("i").click(function(){
		$(this).parent().fadeOut();
		$(this).parent().nextAll().css('opacity','1');
		})
})