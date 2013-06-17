(function() {

  $(function() {
    var options_elastic, tagit_options;
    $(".chzn-select").chosen({
      width: '95%'
    });
    $(".chzn-select-deselect").chosen({
      allow_single_deselect: true
    });
    $.mask.definitions["~"] = "[+-]";
    $("#masked-date").mask("99/99/9999");
    $("#masked-phone").mask("(999) 999-9999");
    $("#masked-phoneext").mask("(999) 999-9999? x99999");
    $("#masked-product").mask("a*-999-a999", {
      placeholder: " ",
      completed: function() {
        alert("You typed the following: " + this.val());
      }
    });
    $("#datetimepicker1").datetimepicker();
    $("#datetimepicker2").datetimepicker({
      pickTime: false
    });
    $("#datetimepicker3").datetimepicker({
      pickDate: false
    });
    $("#colorpicker1").colorpicker();
    $("#colorpicker2").colorpicker();
    $("#cp3").colorpicker();
    tagit_options = {
      allowSpaces: true
    };
    $("#tags").tagsInput({
      width: "auto",
      onChange: function(elem, elem_tags) {
        var languages;
        languages = ["php", "ruby", "javascript"];
        $(".tag", elem_tags).each(function() {
          if ($(this).text().search(new RegExp("\\b(" + languages.join("|") + ")\\b")) >= 0) {
            $(this).css({
              backgroundColor: "#6d84b4",
              color: "#ffffff"
            });
            $(this).find("a").css({
              color: "#ffffff"
            });
          }
        });
      }
    });
    $("#elastic-textarea").autogrow();
    options_elastic = {
      maxCharacterSize: 200,
      originalStyle: "text-info",
      warningStyle: "text-warning",
      warningNumber: 40,
      displayFormat: "#input Characters | #left Characters Left | #words Words"
    };
    $("#limit-textarea").textareaCount(options_elastic);
    $(".sexy input").uniform();
  });

}).call(this);
