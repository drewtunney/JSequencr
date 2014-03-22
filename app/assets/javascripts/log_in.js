var loginForm = $("<form>").attr('id', 'log-in');
var logoutButton = $("<button id='log-out'>").text("log out");

$('#nav-bar').append(loginForm);

$("<label>").text("Email:").appendTo(loginForm);
var loginEmailSpace = $("<input id='email' name='email'>").appendTo(loginForm);

$("<label>").text("Password:").appendTo(loginForm);
var loginPasswordSpace = $("<input id='password' type='password'>").appendTo(loginForm);

$("<button id='submit'>").appendTo(loginForm).text('Log In');

// TODO Logout button, should it go in separate view? 
$("#nav-bar").append(logoutButton);


var login = function(){
  var loginEmail = loginEmailSpace.val();
  var loginPassword = loginPasswordSpace.val();
  console.log(loginEmail);
  console.log(loginPassword);
  $.ajax({
    type: 'POST',
    url: "/session",
    data: {
      'email': loginEmail,
      'password': loginPassword,
    },
    success: function(){
      $.get('/current_user', function(data){
      console.log(data);
      });
    }
  });
};

var id;

var logout = function(){
  $.get('/current_user', function(data){
    id = data.id;
  });

  console.log(id);

  $.ajax({
    type: 'DELETE',
    url: "/session",
    data: {
      'user_id': id
    }
  });
  console.log("hello");
};


$("#log-in").on("submit", function(e){
  e.preventDefault();
  login();
});

$("#log-out").on("click", function(){
  logout();
});

