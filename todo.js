window.setTimeout(function(){
	$('ul').on("click", "li", function(){
		$(this).toggleClass("strikethrough");
	})

	$('ul').on("click","span", function(event){
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
		event.stopPropagation();
	})

	var text = $('input[type = "text"]').val();
	console.log(text);


	//Adding a new Todo
	$('input').on("keypress", function(event){
		if(event.which === 13)
		{
			if(event.which === 13)
			{
				var todoText = $(this).val();
				$('ul').append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
				$(this).val("")
			}
		}
	})

	$("#plus").on("click",function(){
		$('input').fadeToggle();
	})


},500);

