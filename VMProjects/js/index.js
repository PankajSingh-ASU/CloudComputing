$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$("button").click(function() {
	console.log('Lgin method');
  inputs = "Pankaj Singh";  //grab then inputs of your form #loginform
$.ajax ({
		
       url: "success.html",
       data: inputs,
       success: function() {
        $("#login").html("You are now logged in!");
}
  });
})

function validateFormOnSubmit(theForm) {
    console.log(theForm.username);
    console.log(theForm.password);
}