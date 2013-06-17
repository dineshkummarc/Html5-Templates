(function() {

  $(function() {
    $("#vmap-world").vectorMap({
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
    });
    $("#vmap-usa").vectorMap({
      map: "usa_en",
      enableZoom: true,
      showTooltip: true,
      selectedRegion: "MO"
    });
    $("#vmap-russia").vectorMap({
      map: "russia_en",
      backgroundColor: "#333333",
      color: "#ffffff",
      hoverOpacity: 0.7,
      selectedColor: "#999999",
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ["#C8EEFF", "#006491"],
      normalizeFunction: "polynomial"
    });
    return $("#vmap-germany").vectorMap({
      map: "germany_en",
      onRegionClick: function(element, code, region) {
        var message;
        message = "You clicked \"" + region + "\" which has the code: " + code.toUpperCase();
        return alert(message);
      }
    });
  });

}).call(this);
