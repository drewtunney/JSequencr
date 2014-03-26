//SIGNUP Functionality
var newUser = function(name, email, password, password_confirmation){
  $.ajax({
    type: 'POST',
    url: "/users",
    data: {
      'name': name,
      'email': email,
      'password': password,
      'password_confirmation': password_confirmation}
    }).done(function(data){
      console.log(data.id);
      JSequencr.currentUserId = data.id;
      JSequencr.currentUserName = data.name;
      updateLoginForm();
    });
};

//LOGIN&LOGOUT functionality
function login(email, password){
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
        JSequencr.currentUserName = data.name;
        updateLoginForm();
      }
  }).fail(function(){
    console.log("LOG IN ERROR");
    addBadLoginAlert();
  });
}

function logout(){
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
}

//Checking logged-in state
function loggedIn(){
  if(JSequencr.currentUserId > 0){
    return true;
  } else {
    return false;
  }
}

//Visual styling related to logged-in state
function updateLoginForm(){

  function hideLoginForm(){
    $("#log-in-form").css('display', 'none');
  }
  function showLoginForm(){
    $("#log-in-form").css('display', 'block');
    $("#log-in-form").effect("slide", 1000);
  }
  function showLogoutButton(){
    $("#log-out").css('display', 'block');
  }
  function hideLogoutButton(){
    $("#log-out").css('display', 'none');
  }
  function displayUsersName(){
    var headerText = $("h1").text();
    $("h1").text(headerText + " " + JSequencr.currentUserName);
  }
  function resetHeader(){
    $("h1").text("Let's Get Weird");
  }
  if(loggedIn()){
    hideLoginForm();
    hideSignUpForm();
    showLogoutButton();
    hideAuthLinks();
    displayUsersName();
  } else {
    hideLogoutButton();
    showAuthLinks();
    resetHeader();
  }
}