
/* Calls the handler function if the user has clicked outside the object
*/


(function() {

  (function($) {
    return $.fn.extend({
      clickOutside: function(handler, exceptions) {
        var $this;
        $this = void 0;
        $this = this;
        $("body").bind("click", function(event) {
          if (exceptions && $.inArray(event.target, exceptions) > -1) {

          } else {
            if (!$.contains($this[0], event.target)) {
              return handler(event, $this);
            }
          }
        });
        return this;
      }
    });
  })(jQuery);

}).call(this);
