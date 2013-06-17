(function() {

  $(function() {
    var avgrundContent, chatWindow, updateScrollFeeds;
    avgrundContent = "";
    avgrundContent += "<aside class=\"\">";
    avgrundContent += "  <div class=\"modal-header\">";
    avgrundContent += "    <button type=\"button\" class=\"close avgrund-close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>";
    avgrundContent += "    <h3>Modal header</h3>";
    avgrundContent += "  </div>";
    avgrundContent += "  <div class=\"modal-body\">";
    avgrundContent += "    <p>One fine body…</p>";
    avgrundContent += "  </div>";
    avgrundContent += "  <div class=\"modal-footer\">";
    avgrundContent += "    <a href=\"#\" class=\"btn avgrund-close\">Close</a>";
    avgrundContent += "    <a href=\"#\" class=\"btn btn-primary\">Save changes</a>";
    avgrundContent += "  </div>";
    avgrundContent += "</aside>";
    $("#show-avgrund").avgrund({
      height: 170,
      width: 560,
      holderClass: "custom",
      showClose: false,
      enableStackAnimation: true,
      onBlurContainer: ".wraper",
      template: avgrundContent
    });
    chatWindow = $(".chat-messages-list .content");
    if (ie === 8) {
      chatWindow.slimScroll({
        height: '400px'
      });
    } else {
      chatWindow.slimScroll({
        start: "bottom",
        railVisible: true,
        alwaysVisible: true,
        height: '400px'
      });
    }
    $("[data-toggle='popover']").popover({
      container: "#main",
      trigger: "hover"
    });
    $("[data-toggle='tooltip']").tooltip();
    $("#gritters #add-regular").click(function() {
      $.gritter.add({
        title: "This is a regular notice!",
        text: "This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href=\"#\" style=\"color:#ccc\">magnis dis parturient</a> montes, nascetur ridiculus mus.",
        image: url_avatar,
        sticky: false,
        time: ""
      });
      return false;
    });
    $("#gritters #add-sticky").click(function() {
      var unique_id;
      unique_id = $.gritter.add({
        title: "This is a sticky notice!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href=\"#\">magnis dis parturient</a> montes, nascetur ridiculus mus.",
        image: url_avatar,
        sticky: true,
        time: "",
        class_name: "gritter-light"
      });
      return false;
    });
    $("#gritters #add-without-image").click(function() {
      $.gritter.add({
        title: "This is a notice without an image!",
        text: "This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href=\"#\">magnis dis parturient</a> montes, nascetur ridiculus mus.",
        class_name: "gritter-light"
      });
      return false;
    });
    $("#gritters #add-max").click(function() {
      $.gritter.add({
        title: "This is a notice with a max of 3 on screen at one time!",
        text: "This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href=\"#\">magnis dis parturient</a> montes, nascetur ridiculus mus.",
        image: "http://a0.twimg.com/profile_images/59268975/jquery_avatar_bigger.png",
        sticky: false,
        class_name: "gritter-light",
        before_open: function() {
          if ($(".gritter-item-wrapper").length === 3) {
            return false;
          }
        }
      });
      return false;
    });
    $("#gritters #remove-all").click(function() {
      $.gritter.removeAll();
      return false;
    });
    $("#gritters #add-gritter-light").click(function() {
      $.gritter.add({
        title: "This is a light notification",
        text: "Just add a \"gritter-light\" class_name to your $.gritter.add or globally to $.gritter.options.class_name",
        class_name: "gritter-light"
      });
      return false;
    });
    /* Activate the scrollbar for the feed lists
    */

    updateScrollFeeds = function() {
      return $("#feeds .content").slimScroll({
        height: '445px'
      });
    };
    $("#feeds a[data-toggle=\"tab\"]").on("shown", function(e) {
      updateScrollFeeds();
    });
    updateScrollFeeds();
  });

}).call(this);
