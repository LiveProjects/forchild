$( document).ready(function(e) {
	var width=window.outerWidth;
	var height=window.innerHeight;
	console.log(width);
    
	$("#banner").css({height:height});
	var bannerrun=setInterval(run,1000);
	var banner=$("#banner");
	var len=banner.find("li").length;
	var a=0;
	//alert(len);
	function run(){
		if(a<4){
			$("#banner ul li").eq(a).fadeIn();
			$("#banner ul li").eq(a).siblings().fadeOut();
			a=a+1;
			}else{
				a=0;
				$("#banner ul li").eq(a).fadeIn();
			    $("#banner ul li").eq(a).siblings().fadeOut();
				}
		
		 
		}
	$(document).scroll(function(){
		var recttop=$(document).scrollTop();
		console.log(recttop);
        if(recttop>=height-100){
			$("#rect1").show();
			$("#rect").hide();
			}else if(recttop<height-100){
				$("#rect1").hide();
				$("#rect").show();
				}
		})
	
});