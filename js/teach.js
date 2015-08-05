$(document).ready(function(){
	var li=$("#media li");
	var a=0;
	var move1;
	var b;
	var  width=window.innerWidth;
	var video=document.getElementById("video");
	video.onclick=function(){
		if(video.paused){
			video.play();
			clearInterval(move1);
		}else{
			video.pause();
		}
	}
	var move1=setInterval(move,4000);
	function move(){
		if(a>=4){
			a=0;
		}
		li.eq(a).css('display','block');
		li.eq(a).siblings().css('display','none');
		a=a+1;
	}

	var len=$("#teach-middle-left-button").find("button").length;
	var button=$("#teach-middle-left-button").find("button");
	for(var b=0;b<4;b++){
		//alert(b);
		!function(b){
			//alert(parseInt(b));
			$("#teach-middle-left-button").find("button").eq(b).click(function(){
				//alert(b);
				$("#teach-middle-left ul>li").eq(b).fadeIn(0);
				$("#teach-middle-left ul>li").eq(b).siblings().fadeOut();
			})
		}(b)
	}
	var time=video.duration;
	var len1=document.getElementById("video");
    
    if(video.error){
    	alert(video.error)
    }else{
    	alert( );
    }
})