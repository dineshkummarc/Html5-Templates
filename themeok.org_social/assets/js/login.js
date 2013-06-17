(function() {

  $(function() {
    $("#btn-register").click(function() {
      $(".form-login").hide();
      $(".form-register").show();
      $(".form-forgot").hide();
      $("#register-container").show();
      $("#btn-register-user").show();
      $(".form-register .alert").hide();
    });
    $(".btn-back").click(function() {
      $(".form-login").show();
      $(".form-register").hide();
      $(".form-forgot").hide();
    });
    $("#link-forgot").click(function() {
      $(".form-login").hide();
      $(".form-register").hide();
      $(".form-forgot").show();
    });
    $("#btn-register-user").click(function() {
      $(".form-register .alert").show();
      $("#register-container").hide();
      $("#btn-register-user").hide();
    });
  });

}).call(this);
