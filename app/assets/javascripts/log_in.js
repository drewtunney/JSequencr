  // var loginForm = $("#log-in");
  // var logoutButton = $("#log-out");

// var createLoginForm = function(){
//   // var loginForm = $("#log-in");
//   $('#nav-bar').append(loginForm);
//   $("<label>").text("Email:").appendTo(loginForm);
//   var loginEmailSpace = $("<input id='login-email' name='email'>").appendTo(loginForm);
//   $("<label>").text("Password:").appendTo(loginForm);
//   var loginPasswordSpace = $("<input id='login-password' type='password'>").appendTo(loginForm);
//   $("<button id='log-in'>").appendTo(loginForm).text('Log In');
//   $("#nav-bar").append(logoutButton);
//   loginSubmit();
//   logoutSubmit();
// };


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
      var name = data.name || "";
      currentUserId = data.id;
      // $('body').append('<div>').append(name);
      // loginForm.remove();
      // signUpForm.remove();
      });
    }
  });
};

var id;

var logout = function(){
  // var logoutButton = $("#log-out");
  console.log("i'm logging out");
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
      
    }
  });
  console.log("hello");
};

var loginSubmit = function(){
  $("#log-in-form").on("submit", function(e){
    console.log("i'm trying to submit");
    e.preventDefault();
    login();
  });
};

var logoutSubmit = function(){
$("#log-out").on("click", function(){
  console.log("I have pressed log out");
  logout();
  // createUserForm();
  // createLoginForm();
});
};

var hideLoginForm = function(){
  $("#log-in-form").css('display', 'none');
};

var showLoginForm = function(){
  $("#log-in-form").css('display', 'block');
};

var loggedIn = function(){
  if(currentUserId > 0){
    return true;
  } else {
    return false;
  }
};

var showLogoutButton = function(){
  $("#log-in").css('display', 'block');
};

var hideLogoutButton = function(){
  $("#log-in").css('display', 'block');
};

var updateLoginForm = function(){
  if(loggedIn){
    hideLoginForm();
    showLogoutButton();
  } else {
    showLoginForm();
    hideLogoutButton();
  }
};

var getCurrentUser = function(){
  $.get('/current_user', function(data){
    if (data !== null) {
      currentUserId = data.id;
    } else {
      currentUserId = 0;
    }

  });
  return currentUserId;
};


var submitUpdatesLogin = function(){
$(".submit").on("click", function(){
  updateLoginForm();
  });
};



