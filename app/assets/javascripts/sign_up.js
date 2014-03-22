var loginDiv = $("<div>");
var signUpForm = $("<form>").attr('id', 'sign-up').appendTo(loginDiv);



$('#nav-bar').append(signUpForm);

$("<label>").text("Name:").appendTo(signUpForm);
var nameSpace = $("<input id='name' name='name'>").appendTo(signUpForm);

$("<label>").text("Email:").appendTo(signUpForm);
var emailSpace = $("<input id='email' name='email'>").appendTo(signUpForm);

$("<label>").text("Password:").appendTo(signUpForm);
var passwordSpace = $("<input id='password'type='password'>").appendTo(signUpForm);

$("<label>").text("Confirm Password:").appendTo(signUpForm);
var passwordConfirmationSpace = $("<input id='password_confirmation'type='password'>").appendTo(signUpForm);

$("<button id='submit'>").appendTo(signUpForm).text('Sign up');

// $.post("/users", function(data){
//   console.log(data);
// });

var newUser = function(){
  var userName = nameSpace.val();
  var userEmail = emailSpace.val();
  var userPassword = passwordSpace.val();
  var userPasswordConfirmation = passwordConfirmationSpace.val();
  console.log(userName);
  $.ajax({
    type: 'POST',
    url: "/users",
    data: {
      'name': userName,
      'email': userEmail,
      'password': userPassword,
      'password_confirmation': userPasswordConfirmation
    }
  });
  // console.log(data);
};

$("#sign-up").on("submit", function(e){
  e.preventDefault();
  console.log("hello");
  newUser();
});