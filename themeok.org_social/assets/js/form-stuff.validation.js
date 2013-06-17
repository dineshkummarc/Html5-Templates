(function() {

  $(document).ready(function() {
    $("#register-form #username").focus(function() {
      var firstname, lastname;
      firstname = $("#firstname").val();
      lastname = $("#lastname").val();
      if (firstname && lastname && !this.value) {
        return this.value = firstname + "." + lastname;
      }
    });
    $("#register-form #title").css("position", "absolute").css("z-index", "-9999").chosen().show();
    $("#register-form #url").bind("focus", function(e) {
      if ($.trim($(e.target).val()) === "") {
        return $(e.target).val("http://");
      }
    });
    $("#register-form #date").mask("99/99/9999");
    $.validator.addMethod("chosen", (function(value, element) {
      if (value === 0) {
        return false;
      } else {
        if (value.length === 0) {
          return false;
        } else {
          return true;
        }
      }
    }), "Please select an option");
    $.validator.addMethod("dateformat", (function(value, element) {
      return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
    }), "Please enter a date in the format mm/dd/yyyy");
    return $("#register-form").validate({
      errorElement: "span",
      errorPlacement: function(error, element) {
        error.appendTo(element.parents("div.controls"));
        error.addClass("help-block");
        element.parents(".control-group").removeClass("success").addClass("error");
        return element.parents(".control-group").find("a.chzn-single").addClass("error");
      },
      success: function(label) {
        label.parents(".control-group").removeClass("error");
        return label.parents(".control-group").find("a.chzn-single").removeClass("error");
      },
      rules: {
        title: {
          required: true,
          min: 1,
          chosen: true
        },
        firstname: {
          required: true,
          minlength: 2
        },
        lastname: {
          required: true,
          minlength: 2
        },
        username: {
          required: true,
          minlength: 2,
          maxlength: 10
        },
        password1: {
          required: true,
          minlength: 6,
          maxlength: 12
        },
        password2: {
          required: true,
          minlength: 6,
          equalTo: "#password1"
        },
        email: {
          required: true,
          email: true
        },
        date: {
          required: true,
          dateformat: true
        },
        url: {
          required: true,
          url: true
        },
        gender: {
          required: true
        },
        agree: "required"
      },
      messages: {
        title: {
          min: "Chose an option"
        },
        gender: {
          min: "Chose an option"
        }
      },
      submitHandler: function(form) {
        return $("#register-form #submit-button").button("loading");
      }
    });
  });

}).call(this);
