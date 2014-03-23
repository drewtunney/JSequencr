var loginDiv = $("<div>");
var signUpForm = $("<form>").attr('id', 'sign-up').appendTo(loginDiv);


var createUserForm = function(){
  $('#nav-bar').append(signUpForm);
  $("<label>").text("Name:").appendTo(signUpForm);
  var nameSpace = $("<input id='signup-name' name='name'>").appendTo(signUpForm);
  $("<label>").text("Email:").appendTo(signUpForm);
  var emailSpace = $("<input id='signup-email' name='email' type='email'>").appendTo(signUpForm);
  $("<label>").text("Password:").appendTo(signUpForm);
  var passwordSpace = $("<input id='signup-password'type='password'>").appendTo(signUpForm);
  $("<label>").text("Confirm Password:").appendTo(signUpForm);
  var passwordConfirmationSpace = $("<input id='signup-password_confirmation'type='password'>").appendTo(signUpForm);
  $("<button id='submit'>").appendTo(signUpForm).text('Sign up');
  signUpSubmit();
};
// $.post("/users", function(data){
//   console.log(data);
// });

var newUser = function(){
  var userName = $("input#signup-name").val();
  var userEmail = $("input#signup-email").val();
  var userPassword = $("input#signup-password").val();
  var userPasswordConfirmation = $("input#signup-password_confirmation").val();
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
    }
  });
  // console.log(data);
};
var signUpSubmit = function(){
$("#sign-up").on("submit", function(e){
  e.preventDefault();
  console.log("hello");
  newUser();
});
};