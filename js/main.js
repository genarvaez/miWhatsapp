$(document).ready(function(){

	$(".active-chat").click(function(){
		var copia = $(this).next().clone();
		$(".panel .header").html(copia);
	})

		
	$(".fa-microphone").click(function(event) {
		var date = new Date();
		console.log(date)
		var mensaje = $(".message").val();
		$(".write-window").append('<div class="col offset-m7 m5 message-out">' + mensaje + '<br><span>' + date.getHours() + ':' + date.getMinutes()+ '</span>'+'</div>');
		setTimeout(function(){
			$(".write-window").append('<div class="col m5 message-in"><p>Hola, ahora estoy ocuopada, te llamo mas tarde :*</p>'+'<span>' + date.getHours() + ':' + date.getMinutes()+ '</span>'+'</div>')}, 3000)
		$(".message").val("");
	});
})