var loginDiv = $("<div>");
var signUpForm = $("<form>").appendTo(loginDiv);

$('#login').append(signUpForm);

$("<label>").text("Name:").appendTo(signUpForm);
$("<input id='name' name='name'>").appendTo(signUpForm);

$("<label>").text("Email:").appendTo(signUpForm);
$("<input id='email' name='email'>").appendTo(signUpForm);

$("<label>").text("Password:").appendTo(signUpForm);
$("<input id='password'>").appendTo(signUpForm);

$("<label>").text("Confirm Password:").appendTo(signUpForm);
$("<input id='password_confirmation'>").appendTo(signUpForm);

$("<button id='sign-up'>").appendTo(signUpForm).text('Sign up');
