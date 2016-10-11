$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$("#submitlogin").click(function() {
	console.log('Lgin method');
  var uname=$("#username").val();
  var pwd=$("#password").val();//grab then inputs of your form #loginform
  //console.log(uname,pwd);
  if(uname=='admin'&&pwd=='admin')
	  {
	  console.log("successful")

$.ajax ({
		
       url: "success.html",
       data: "abc",
       success: function() {
    	   console.log('I am done');
    	   window.location.href='ListVMs.html';
}
  });
	  }
})

function validateFormOnSubmit(theForm) {
    console.log(theForm.username);
    console.log(theForm.password);
}