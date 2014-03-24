// var loginDiv = $("<div>");
// var signUpForm = $("#sign-up");


// var createUserForm = function(){
//   $('#nav-bar').append(signUpForm);
//   $("<label>").text("Name:").appendTo(signUpForm);
//   var nameSpace = $("<input id='signup-name' name='name'>").appendTo(signUpForm);
//   $("<label>").text("Email:").appendTo(signUpForm);
//   var emailSpace = $("<input id='signup-email' name='email' type='email'>").appendTo(signUpForm);
//   $("<label>").text("Password:").appendTo(signUpForm);
//   var passwordSpace = $("<input id='signup-password'type='password'>").appendTo(signUpForm);
//   $("<label>").text("Confirm Password:").appendTo(signUpForm);
//   var passwordConfirmationSpace = $("<input id='signup-password_confirmation'type='password'>").appendTo(signUpForm);
//   $("<button id='submit'>").appendTo(signUpForm).text('Sign up');
//   signUpSubmit();
// };

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