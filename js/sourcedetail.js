$(document).ready(function(){
   $("#sourcedetail-middle1 dl dt").bind('click',function(){
   	$(this).nextUntil("dt").toggle();

   })
})