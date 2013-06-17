(function() {

  $(function() {
    /*********************************
    * Codes for the Social Sidebar
    */

    var expadSidebar, fixeSidebarScroll, reduceSidebar, resizeHandler, sidebarScroll, sidebarScrollOptions, socialBarContainer, userSettingsContainer, wrapperCantainer;
    socialBarContainer = $(".social-sidebar");
    wrapperCantainer = $(".wraper");
    userSettingsContainer = $(".social-sidebar .user-settings");
    userSettingsContainer.find(".user-settings-content").on("click", function(e) {
      e.stopPropagation();
      userSettingsContainer.toggle();
    });
    userSettingsContainer.find(".user-settings-footer a").on("click", function(e) {
      e.stopPropagation();
      userSettingsContainer.toggle();
    });
    userSettingsContainer.clickOutside(function(event, obj) {
      if (event.target.className.indexOf("trigger-user-settings") >= 0) {
        obj.toggle();
      } else {
        obj.hide();
      }
    });
    expadSidebar = function() {
      $(".wraper").addClass("sidebar-full").removeClass("sidebar-icon");
      socialBarContainer.addClass("sidebar-full");
      return socialBarContainer.find(".accordion-group.active .accordion-body").collapse("show");
    };
    reduceSidebar = function() {
      $(".wraper").removeClass("sidebar-full");
      socialBarContainer.removeClass("sidebar-full");
      return socialBarContainer.find(".accordion-body.in").collapse("hide");
    };
    $(".switch-sidebar-icon").click(function() {
      reduceSidebar();
    });
    $(".switch-sidebar-full").click(function() {
      expadSidebar();
    });
    $(".accordion-body").on("show", function() {
      $(this).parent().find(".accordion-toggle").addClass("opened");
      if (!$(".wraper").hasClass("sidebar-full")) {
        $(".social-sidebar").addClass("sidebar-full");
        $(".wraper").addClass("sidebar-full");
        $(".wraper").addClass("sidebar-icon");
      }
    });
    $(".accordion-body").on("hide", function() {
      $(this).parent().find(".accordion-toggle").removeClass("opened");
      if ($(".wraper").hasClass("sidebar-icon")) {
        $(".social-sidebar").removeClass("sidebar-full");
        $(".wraper").removeClass("sidebar-full");
      }
    });
    socialBarContainer.clickOutside(function(event, obj) {
      if ($(".wraper").hasClass("sidebar-icon")) {
        $(".social-sidebar").removeClass("sidebar-full");
        $(".wraper").removeClass("sidebar-full");
        obj.find(".accordion-body.in").collapse("hide");
        obj.find(".accordion .accordion-group").each(function() {
          $(this).find(".accordion-toggle").removeClass("opened");
          $(this).find(".accordion-body").removeClass("in");
        });
      }
    });
    sidebarScroll = $(".social-sidebar-content .scrollable");
    sidebarScrollOptions = {
      height: "auto",
      size: "8px",
      railVisible: true,
      railColor: "#000"
    };
    resizeHandler = function(slimScrollelement, slimScrollparent) {
      var element, height, parent, windowHeight;
      element = slimScrollelement;
      parent = $(slimScrollparent);
      windowHeight = $(window).height();
      element.css("height", windowHeight + "px");
      parent.find(".slimScrollDiv").css("height", windowHeight + "px");
      height = Math.max((element.outerHeight() / element.scrollHeight) * element.outerHeight(), 30);
      parent.find(".slimScrollBar").css({
        height: height + "px"
      });
    };
    fixeSidebarScroll = function() {
      if ($(window).width() <= 979) {
        $(".social-sidebar .slimScrollDiv").css("height", "");
        sidebarScroll.slimscroll("destroy");
        sidebarScroll.attr('style', '');
      }
    };
    sidebarScroll.slimscroll(sidebarScrollOptions);
    $(window).resize(function() {
      resizeHandler(sidebarScroll, ".social-sidebar-content");
      fixeSidebarScroll();
    });
    socialBarContainer.on("show", function() {
      fixeSidebarScroll();
    });
    $(".social-sidebar .accordion-body").on("shown", function() {
      sidebarScroll.slimscroll();
    });
    $(".social-sidebar .accordion-body").on("hidden", function() {
      sidebarScroll.slimscroll();
    });
    sidebarScroll.bind("slimscrolling", function(e, pos) {
      if (userSettingsContainer.css("display") !== "none") {
        userSettingsContainer.hide();
      }
    });
    /*********************************
    * END Code for the Social Sidebar
    */

    $("[href|='#']").click(function(e) {
      e.preventDefault();
    });
  });

}).call(this);
