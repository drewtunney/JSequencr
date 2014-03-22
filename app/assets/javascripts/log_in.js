var loginForm = $("<form>").attr('id', 'login');

$('#nav-bar').append(loginForm);

$("<label>").text("Email:").appendTo(loginForm);
var loginEmailSpace = $("<input id='email' name='email'>").appendTo(loginForm);

$("<label>").text("Password:").appendTo(loginForm);
var loginPasswordSpace = $("<input id='password'>").appendTo(loginForm);

$("<button id='submit'>").appendTo(loginForm).text('Log In');


var login = function(){
  var loginEmail = loginEmailSpace.val();
  var loginPassword = loginPasswordSpace.val();
  // console.log(userEmail);
  $.ajax({
    type: 'POST',
    url: "/session",
    data: {
      'email': loginEmail,
      'password': loginPassword,
    }
  });
  $.get('/current_user', function(data){
    console.log(data);
  });
};

$("#login").on("submit", function(e){
  e.preventDefault();
  login();
});