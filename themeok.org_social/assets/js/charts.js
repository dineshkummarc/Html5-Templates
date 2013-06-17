(function() {
  var labelFormatter;

  labelFormatter = function(label, series) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
  };

  $(function() {
    /* Basic Chart
    */

    var bars, charts, d1, d2, d3, d4, d5, d6, data, g1, g2, g3, g4, generate, getRandomData, i, lines, options, plot, plotWithOptions, series, stack, steps, totalPoints, update, updateInterval;
    d1 = [];
    i = 0;
    while (i < 14) {
      d1.push([i, Math.sin(i)]);
      i += 0.5;
    }
    d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
    d3 = [];
    i = 0;
    while (i < 14) {
      d3.push([i, Math.cos(i)]);
      i += 0.5;
    }
    d4 = [];
    i = 0;
    while (i < 14) {
      d4.push([i, Math.sqrt(i * 10)]);
      i += 0.1;
    }
    d5 = [];
    i = 0;
    while (i < 14) {
      d5.push([i, Math.sqrt(i)]);
      i += 0.5;
    }
    d6 = [];
    i = 0;
    while (i < 14) {
      d6.push([i, Math.sqrt(2 * i + Math.sin(i) + 5)]);
      i += 0.5 + Math.random();
    }
    $.plot($("#basic-charts"), [
      {
        data: d1,
        lines: {
          show: true,
          fill: true
        }
      }, {
        data: d2,
        bars: {
          show: true
        }
      }, {
        data: d3,
        points: {
          show: true
        }
      }, {
        data: d4,
        lines: {
          show: true
        }
      }, {
        data: d5,
        lines: {
          show: true
        },
        points: {
          show: true
        }
      }, {
        data: d6,
        lines: {
          show: true,
          steps: true
        }
      }
    ]);
    /* Chart with symbols
    */

    generate = function(offset, amplitude) {
      var end, res, start, x;
      res = [];
      start = 0;
      end = 10;
      i = 0;
      while (i <= 50) {
        x = start + i / 50 * (end - start);
        res.push([x, amplitude * Math.sin(x + offset)]);
        ++i;
      }
      return res;
    };
    data = [
      {
        data: generate(2, 1.8),
        points: {
          symbol: "circle"
        }
      }, {
        data: generate(3, 1.5),
        points: {
          symbol: "square"
        }
      }, {
        data: generate(4, 0.9),
        points: {
          symbol: "diamond"
        }
      }, {
        data: generate(6, 1.4),
        points: {
          symbol: "triangle"
        }
      }, {
        data: generate(7, 1.1),
        points: {
          symbol: "cross"
        }
      }
    ];
    $.plot($("#symbols-chart"), data, {
      series: {
        points: {
          show: true,
          radius: 3
        }
      },
      grid: {
        hoverable: true
      }
    });
    /*Donut & Pie Chart
    */

    data = [];
    series = Math.floor(Math.random() * 10) + 1;
    i = 0;
    while (i < series) {
      data[i] = {
        label: "Series" + (i + 1),
        data: Math.floor(Math.random() * 100) + 1
      };
      i++;
    }
    $.plot($("#pie-chart"), data, {
      series: {
        pie: {
          show: true,
          radius: 1,
          label: {
            show: true,
            radius: 3 / 4,
            formatter: function(label, series) {
              return "<div style=\"font-size:8pt;text-align:center;padding:2px;color:white;\">" + label + "<br/>" + Math.round(series.percent) + "%</div>";
            },
            background: {
              opacity: 0.5,
              color: "#000"
            }
          }
        }
      },
      legend: {
        show: false
      }
    });
    $.plot($("#donut-chart"), data, {
      series: {
        pie: {
          innerRadius: 0.5,
          show: true
        }
      }
    });
    /*Bar Chart
    */

    d1 = [];
    i = 0;
    while (i <= 10) {
      d1.push([i, parseInt(Math.random() * 30)]);
      i += 1;
    }
    d2 = [];
    i = 0;
    while (i <= 10) {
      d2.push([i, parseInt(Math.random() * 30)]);
      i += 1;
    }
    d3 = [];
    i = 0;
    while (i <= 10) {
      d3.push([i, parseInt(Math.random() * 30)]);
      i += 1;
    }
    stack = 0;
    bars = true;
    lines = false;
    steps = false;
    plotWithOptions = function() {
      return $.plot($("#bar-chart"), [d1, d2, d3], {
        series: {
          stack: stack,
          lines: {
            show: lines,
            fill: true,
            steps: steps
          },
          bars: {
            show: bars,
            barWidth: 0.6
          }
        }
      });
    };
    plotWithOptions();
    $(".stackControls a").click(function(e) {
      e.preventDefault();
      stack = ($(this).text() === "With stacking" ? true : null);
      return plotWithOptions();
    });
    $(".graphControls button").click(function(e) {
      e.preventDefault();
      bars = $(this).text().indexOf("Bars") !== -1;
      lines = $(this).text().indexOf("Lines") !== -1;
      steps = $(this).text().indexOf("steps") !== -1;
      return plotWithOptions();
    });
    /* Live Chart
    */

    data = [];
    totalPoints = 300;
    getRandomData = function() {
      var prev, res, y;
      if (data.length > 0) {
        data = data.slice(1);
      }
      while (data.length < totalPoints) {
        prev = (data.length > 0 ? data[data.length - 1] : 50);
        y = prev + Math.random() * 10 - 5;
        if (y < 0) {
          y = 0;
        }
        if (y > 100) {
          y = 100;
        }
        data.push(y);
      }
      res = [];
      i = 0;
      while (i < data.length) {
        res.push([i, data[i]]);
        ++i;
      }
      return res;
    };
    update = function() {
      plot.setData([getRandomData()]);
      plot.draw();
      return setTimeout(update, updateInterval);
    };
    data = [];
    totalPoints = 300;
    updateInterval = 30;
    $("#updateInterval").val(updateInterval).change(function() {
      var v;
      v = $(this).val();
      if (v && !isNaN(+v)) {
        updateInterval = +v;
        if (updateInterval < 1) {
          updateInterval = 1;
        }
        if (updateInterval > 2000) {
          updateInterval = 2000;
        }
        return $(this).val("" + updateInterval);
      }
    });
    options = {
      series: {
        shadowSize: 0
      },
      yaxis: {
        min: 0,
        max: 100
      },
      xaxis: {
        show: false
      }
    };
    plot = $.plot($("#live-chart"), [getRandomData()], options);
    update();
    /* Bar + line composite charts
    */

    $("#compositebar").sparkline("html", {
      type: "bar",
      barColor: "#aaf"
    });
    $("#compositebar").sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
      composite: true,
      fillColor: false,
      lineColor: "red"
    });
    /* Customized line chart
    */

    $("#linecustom").sparkline("html", {
      height: "1.5em",
      width: "8em",
      lineColor: "#f00",
      fillColor: "#ffa",
      minSpotColor: false,
      maxSpotColor: false,
      spotColor: "#77f",
      spotRadius: 3
    });
    /* Tri-state charts using inline values
    */

    $(".sparktristate").sparkline("html", {
      type: "tristate"
    });
    $(".sparktristatecols").sparkline("html", {
      type: "tristate",
      colorMap: {
        "-2": "#fa7",
        2: "#44f"
      }
    });
    /* Mini PieChart
    */

    charts = $(".percentage");
    charts.easyPieChart({
      animate: 1000
    });
    $(".updatePieCharts").on("click", function(e) {
      e.preventDefault();
      return charts.each(function() {
        var newValue;
        newValue = Math.floor(100 * Math.random());
        $(this).data("easyPieChart").update(newValue);
        return $("span", this).text(newValue);
      });
    });
    /* JustGage Charts
    */

    g1 = new JustGage({
      id: "g1",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Big Fella",
      label: "pounds"
    });
    g2 = new JustGage({
      id: "g2",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Small Buddy",
      label: "oz"
    });
    g3 = new JustGage({
      id: "g3",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Tiny Lad",
      label: "oz"
    });
    g4 = new JustGage({
      id: "g4",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      title: "Little Pal",
      label: "oz"
    });
    return setInterval((function() {
      g1.refresh(getRandomInt(50, 100));
      g2.refresh(getRandomInt(50, 100));
      g3.refresh(getRandomInt(0, 50));
      return g4.refresh(getRandomInt(0, 50));
    }), 2500);
  });

}).call(this);
