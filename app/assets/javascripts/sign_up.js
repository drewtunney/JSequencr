var newUser = function(name, email, password, password_confirmation){
  $.ajax({
    type: 'POST',
    url: "/users",
    data: {
      'name': name,
      'email': email,
      'password': password,
      'password_confirmation': password_confirmation
    },
    // success: function(){
    //   loginForm.remove();
    //   signUpForm.remove();
    //   currentUserId = data.id;
    // }
  });
  // console.log(data);
};


var addSignUpSubmitEventListener = function(){
$("#sign-up-form").on("submit", function(e){
  e.preventDefault();
  console.log(e);
  newUser(e.currentTarget[0].value, e.currentTarget[1].value, e.currentTarget[2].value, e.currentTarget[3].value);
});
};

var updateSignUpForm = function(){
  var hideSignupForm = function(){
    $("#sign-up-form").css('display', 'none');
  };

  var showSignupForm = function(){
    $("#sign-up-form").css('display', 'block');
  };
};