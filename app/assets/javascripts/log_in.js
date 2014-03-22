  var loginForm = $("<form>").attr('id', 'log-in');
  var logoutButton = $("<button id='log-out'>").text("log out");

var createLoginForm = function(){
  $('#nav-bar').append(loginForm);
  $("<label>").text("Email:").appendTo(loginForm);
  var loginEmailSpace = $("<input id='email' name='email'>").appendTo(loginForm);
  $("<label>").text("Password:").appendTo(loginForm);
  var loginPasswordSpace = $("<input id='password' type='password'>").appendTo(loginForm);
  $("<button id='log-in'>").appendTo(loginForm).text('Log In');
  $("#nav-bar").append(logoutButton);
};


var login = function(){
  var loginEmail = loginEmailSpace.val();
  var loginPassword = loginPasswordSpace.val();
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
      name = data.name;
      $('body').append('<div>').append(name);
      loginForm.remove();
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
    }
  });
  console.log("hello");
};

// var loginSubmit = function(){
  $("#log-in").on("submit", function(e){
    e.preventDefault();
    login();
  });
// };

$("#log-out").on("click", function(){
  logout();
});

// createLoginForm();

