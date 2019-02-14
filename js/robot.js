function sendMessage(v){
	$(".main").append('<div class="sender" style="clear:both"><div class="sender_main">'+v+'</div></div>')
    $.getJSON("http://www.tuling123.com/openapi/api?key=139e5a0cb3cc43019273357bacfc6c51&info="+v,function(json){
        $(".main").append('<div class="receiver" style="clear:both"><div class="receiver_main">'+json.text+'</div></div>');
		setTimeout(function() {
			$(".main").scrollTop($(".main")[0].scrollHeight);
		}, 200);
	});
		$(".main").scrollTop($(".main")[0].scrollHeight);
};

$(function(){
    $('.footer_send').click(function(){
        var v=$("#footer_chat").val();
        if(v){
            $("#footer_chat").val("");
			sendMessage(v);
        }
    });
	$("#footer_chat").keyup(function(){
	    if(event.keyCode==13){
            $('.footer_send').click();
		}
    });
    $('.header_clear').click(function(){
        $('#talk').empty();
    });
});