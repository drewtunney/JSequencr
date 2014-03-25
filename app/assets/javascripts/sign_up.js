var newUser = function(){
  var userName = $("input#signup-name").val();
  var userEmail = $("input#signup-email").val();
  var userPassword = $("input#signup-password").val();
  var userPasswordConfirmation = $("input#signup-password-confirmation").val();
  console.log(userName);
  $.ajax({
    type: 'POST',
    url: "/users",
    data: {
      'name': userName,
      'email': userEmail,
      'password': userPassword,
      'password_confirmation': userPasswordConfirmation
    },
    success: function(){
      loginForm.remove();
      signUpForm.remove();
      currentUserId = data.id;
    }
  });
  // console.log(data);
};
var signUpSubmit = function(){
$("#sign-up-form").on("submit", function(e){
  e.preventDefault();
  console.log("hello");
  newUser();
});
};

var removeSignupForm = function(){
  $("#sign-up-form").css('display', 'none');
};

var showSignupForm = function(){
  $("#sign-up-form").css('display', 'block');
};