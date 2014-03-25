

var login = function(email, password){
  $.ajax({
    type: 'POST',
    url: "/session",
    data: {'email':    email,
           'password': password}
  }).done(function(data){
      if(data.errors) {
        console.log("LOG IN FAILED");
        console.log(data);

        addBadLoginAlert(data.errors);
      } else {
        console.log("LOGGED IN AS:");
        console.log(data);

        JSequencr.currentUserId = data.id;
        updateLoginForm();
      }
  }).fail(function(){
    console.log("LOG IN ERROR");
    addBadLoginAlert();
  });
};

var logout = function(){
  $.ajax({
    type: 'DELETE',
    url: "/session",
    data: {'user_id': JSequencr.currentUserId}
  }).done(function(){
    console.log("LOGGED OUT");

    JSequencr.currentUserId = 0;
    updateLoginForm();
  }).fail(function(){
    console.log("LOG OUT ERROR");
  });
};

// functions to check if logged in and update page accordingly
var loggedIn = function(){
  if(JSequencr.currentUserId > 0){
    return true;
  } else {
    return false;
  }
};
var updateLoginForm = function(){

  var hideLoginForm = function(){
    $("#log-in-form").css('display', 'none');
  };
  var showLoginForm = function(){
    $("#log-in-form").css('display', 'block');
    $("#log-in-form").effect("slide", 1000);
  };
  var showLogoutButton = function(){
    $("#log-out").css('display', 'block');
  };
  var hideLogoutButton = function(){
    $("#log-out").css('display', 'none');
  };
  if(loggedIn()){
    hideLoginForm();
    hideSignUpForm();
    showLogoutButton();
    hideAuthLinks();
  } else {
    // showLoginForm();
    hideLogoutButton();
    showAuthLinks();
    // showSignUpForm();
  }
};

// event listeners to capture form submits
var addLoginSubmitEventListener = function(){
  $("#log-in-form").on("submit", function(e){
    e.preventDefault();
    login(e.currentTarget[0].value, e.currentTarget[1].value);
  });
};
var addLogoutSubmitEventListener = function(){
  $("#log-out").on("click", function(){
    logout();
  });
};

var hideAuthLinks = function(){
  $(".auth-user").css("display", "none");
};

var showAuthLinks = function(){
  $(".auth-user").css("display", "inline");
};

// alerts based on login
var addBadLoginAlert = function(message){
  alert(message || "Login attempt failed.");
};