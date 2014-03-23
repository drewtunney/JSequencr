  var loginForm = $("<form>").attr('id', 'log-in');
  var logoutButton = $("<button id='log-out'>").text("log out");

var createLoginForm = function(){
  $('#nav-bar').append(loginForm);
  $("<label>").text("Email:").appendTo(loginForm);
  var loginEmailSpace = $("<input id='login-email' name='email'>").appendTo(loginForm);
  $("<label>").text("Password:").appendTo(loginForm);
  var loginPasswordSpace = $("<input id='login-password' type='password'>").appendTo(loginForm);
  $("<button id='log-in'>").appendTo(loginForm).text('Log In');
  $("#nav-bar").append(logoutButton);
  loginSubmit();
  logoutSubmit();
};


var login = function(){
  var loginEmail = $("input#login-email").val();
  var loginPassword = $("input#login-password").val();
  console.log(loginEmail);
  $.ajax({
    type: 'POST',
    url: "/session",
    data: {
      'email': loginEmail,
      'password': loginPassword,
    },
    success: function(){
      $.get('/current_user', function(data){
      var name = data.name;
      $('body').append('<div>').append(name);
      loginForm.remove();
      signUpForm.remove();
      });
    }
  });
};

var id;

var logout = function(){
  $.get('/current_user', function(data){
    id = data.id;
  });
  $.ajax({
    type: 'DELETE',
    url: "/session",
    data: {
      'user_id': id
    },
    success: function(){
      // createUserForm();
      // createLoginForm();
    }
  });
  console.log("hello");
};

var loginSubmit = function(){
  $("#log-in").on("submit", function(e){
    console.log("i'm trying to submit");
    e.preventDefault();
    login();
  });
};

var logoutSubmit = function(){
$("#log-out").on("click", function(){
  logout();
});
};

// createLoginForm();

