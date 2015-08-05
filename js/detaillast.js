$(document).ready(function(){
	/*var i;
     for(var i=0;i<4;i++){
    	!function(i){
    		$("#span ul li").eq(i).click(function(i){
    			alert(i);
	    		$("#span ol li").eq(i).show(0);
	    		$("#span ol li").eq(i).siblings().fadeOut(0);
	    	})
    	}(i)
    }*/
	$("#span ul li").click(function(){
		var num=$(this).index();
		$(this).parent().next().find("li").eq(num).show(0);
		$(this).parent().next().find("li").eq(num).siblings().fadeOut(0);

	})

})