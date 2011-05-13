$(document).ready(function(){

  $("#botaoContato").click(function(){
  	
  	if( $("#dadosContato").css('display') == 'none' )
    	$("#dadosContato").show();
		else
			$("#dadosContato").hide();
			
  });  
  
});