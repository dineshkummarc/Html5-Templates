(function() {

  $(function() {
    /* START vMap Example
    */

    var chatWindow, d, datasets, date, g1, g2, g3, i, m, options, placeholder, plot, plotAccordingToChoices, renderVmap, updateScrollFeeds, vMap, vMapParent, y;
    vMap = $("#vmap-world");
    vMapParent = vMap.parent();
    options = {
      map: "world_en",
      backgroundColor: "#fff",
      color: "#ccc",
      hoverOpacity: 0.7,
      selectedColor: "#666666",
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ["#C8EEFF", "#006491"],
      normalizeFunction: "polynomial"
    };
    renderVmap = function(selector, options) {
      selector.vectorMap(options);
    };
    vMap.width("100%");
    renderVmap(vMap, options);
    /* END Sparkline Example
    */

    /* START JustGage Examples
    */

    g1 = new JustGage({
      id: "g1",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "CPU Load",
      label: "%",
      levelColorsGradient: false
    });
    g2 = new JustGage({
      id: "g2",
      value: getRandomInt(0, 100),
      min: 0,
      max: 1024,
      title: "Memory Usage",
      label: "MB",
      startAnimationTime: 2000,
      startAnimationType: ">",
      refreshAnimationTime: 1000,
      refreshAnimationType: "bounce"
    });
    g3 = new JustGage({
      id: "g3",
      value: getRandomInt(1800, 10000),
      min: 0,
      max: 10000,
      title: "Requets",
      label: ""
    });
    setInterval((function() {
      g1.refresh(getRandomInt(50, 100));
      return g3.refresh(getRandomInt(1800, 10000));
    }), 2500);
    setInterval((function() {
      return g2.refresh(getRandomInt(100, 1024));
    }), 3500);
    /* END JustGage Examples
    */

    /* START Flot Example
    */

    datasets = [
      {
        label: "Russia",
        data: [[1992, 13.4], [1993, 12.2], [1994, 10.6], [1995, 10.2], [1996, 10.1], [1997, 9.7], [1998, 9.5], [1999, 9.7], [2000, 9.9], [2001, 9.9], [2002, 9.9], [2003, 10.3], [2004, 10.5]],
        flag: "ru"
      }, {
        label: "Canada",
        data: [[1990, 10.0], [1991, 11.3], [1992, 9.9], [1993, 9.6], [1994, 9.5], [1995, 9.5], [1996, 9.9], [1997, 9.3], [1998, 9.2], [1999, 9.2], [2000, 9.5], [2001, 9.6], [2002, 9.3], [2003, 9.4], [2004, 9.79]],
        flag: "ca"
      }, {
        label: "Germany",
        data: [[1990, 12.4], [1991, 11.2], [1992, 10.8], [1993, 10.5], [1994, 10.4], [1995, 10.2], [1996, 10.5], [1997, 10.2], [1998, 10.1], [1999, 9.6], [2000, 9.7], [2001, 10.0], [2002, 9.7], [2003, 9.8], [2004, 9.79]],
        flag: "de"
      }, {
        label: "Sweden",
        data: [[1990, 5.8], [1991, 6.0], [1992, 5.9], [1993, 5.5], [1994, 5.7], [1995, 5.3], [1996, 6.1], [1997, 5.4], [1998, 5.4], [1999, 5.1], [2000, 5.2], [2001, 5.4], [2002, 6.2], [2003, 5.9], [2004, 5.89]],
        flag: "se"
      }, {
        label: "Norway",
        data: [[1990, 8.3], [1991, 8.3], [1992, 7.8], [1993, 8.3], [1994, 8.4], [1995, 5.9], [1996, 6.4], [1997, 6.7], [1998, 6.9], [1999, 7.6], [2000, 7.4], [2001, 8.1], [2002, 12.5], [2003, 9.9], [2004, 19.0]],
        flag: "no"
      }
    ];
    options = {
      series: {
        lines: {
          show: true
        },
        points: {
          show: true
        }
      },
      legend: {
        noColumns: 2
      },
      xaxis: {
        tickDecimals: 0
      },
      yaxis: {
        min: 0
      },
      selection: {
        mode: "x"
      }
    };
    placeholder = $("#demo-plot");
    placeholder.bind("plotselected", function(event, ranges) {});
    plot = $.plot(placeholder, datasets, options);
    plotAccordingToChoices = function() {
      var data;
      data = void 0;
      data = [];
      if (data.length > 0) {
        return $.plot("#demo-plot", data, {
          yaxis: {
            min: 0
          },
          xaxis: {
            tickDecimals: 0
          }
        });
      }
    };
    i = 0;
    $.each(datasets, function(key, val) {
      val.color = i;
      return ++i;
    });
    plot.setSelection({
      xaxis: {
        from: 1994,
        to: 1995
      }
    });
    /* END Flot Example
    */

    /* START Full Calendar Example
    */

    date = new Date();
    d = date.getDate();
    m = date.getMonth();
    y = date.getFullYear();
    $("#demo-calendar1").fullCalendar({
      header: {
        left: "prev,next",
        center: "title",
        right: "month,agendaWeek,agendaDay"
      },
      editable: true,
      events: [
        {
          title: "All Day Event",
          start: new Date(y, m, 1)
        }, {
          title: "Long Event",
          start: new Date(y, m, d - 5),
          end: new Date(y, m, d - 2)
        }, {
          id: 999,
          title: "Repeating",
          start: new Date(y, m, d - 3, 16, 0),
          allDay: false
        }, {
          id: 999,
          title: "Repeating",
          start: new Date(y, m, d + 4, 16, 0),
          allDay: false
        }, {
          title: "Meeting",
          start: new Date(y, m, d, 10, 30),
          allDay: false
        }, {
          title: "Lunch",
          start: new Date(y, m, d, 12, 0),
          end: new Date(y, m, d, 14, 0),
          allDay: false
        }, {
          title: "Birthday Party",
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false
        }, {
          title: "Click for Google",
          start: new Date(y, m, 28),
          end: new Date(y, m, 29),
          url: "#http://google.com/"
        }
      ]
    });
    /* END Full Calendar Example
    */

    /* START Sparkline Example
    */

    $("#compositebar").sparkline([50, 60, 62, 35, 40, 50, 38, 38, 38, 40, 60, 38, 50, 60, 38, 45, 62, 38, 38, 40, 30], {
      type: "line",
      width: "100px",
      height: "29px",
      drawNormalOnTop: false
    });
    /* END Sparkline Example
    */

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
    /* Activate the scrollbar for the feed lists
    */

    updateScrollFeeds = function() {
      return $("#feeds .content").slimScroll({
        height: '300px'
      });
    };
    $("#feeds a[data-toggle=\"tab\"]").on("shown", function(e) {
      updateScrollFeeds();
    });
    updateScrollFeeds();
    setTimeout((function() {
      if ($(".social-sidebar").hasClass('sidebar-full')) {
        $(".social-sidebar .user-settings").show();
      }
    }), 2000);
  });

}).call(this);
