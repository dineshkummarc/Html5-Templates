/*
 * Jsgauge 0.4.4
 * http://code.google.com/p/jsgauge/
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */
/**
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * To use this, you need to include gauge.js, jquery, and this file:
 *
 *   <script type="text/javascript" src="../jquery-1.6.min.js"></script>
 *   <script type="text/javascript" src="../jquery.gauge.js"></script>
 *   <script type="text/javascript" src="../gauge.js"></script>
 *
 * Here is code from the example page, rewritten to use the jQuery plugin:
 *
 *   jQuery("#test_default").gauge();
 *   
 *   // Draw the gauge using custom settings
 *   jQuery("#test_custom").gauge({
 *   	value: 60,
 *   	label: 'Hello!',
 *   	min: 50,
 *   	max: 200,
 *   	majorTicks: 4,
 *   	minorTicks: 3, // small ticks inside each major tick
 *   	greenFrom: 50,
 *   	greenTo: 75,
 *   	yellowFrom: 95,
 *   	yellowTo: 150,
 *   	redFrom: 150,
 *   	redTo: 200
 *   });
 *
 *   // Draw the gauge using custom settings (medium)
 *   jQuery("#test_medium").gauge({
 *   	value: -60,
 *   	label: 'Hello!',
 *   	min: -100,
 *   	max: 100,
 *   	majorTicks: 4,
 *   	minorTicks: 3, // small ticks inside each major tick
 *   	greenFrom: -10,
 *   	greenTo: 10,
 *   	yellowFrom: 10,
 *   	yellowTo: 30,
 *   	redFrom: 30,
 *   	redTo: 100
 *   }).gauge('setValue', 80 );
 *
 *          	// Draw the gauge using custom settings (small)
 *   jQuery("#test_small").gauge({
 *      value: 10,
 *      label: 'Hello!',
 *      min: 10,
 *      max: 11,
 *      majorTicks: 4,
 *      minorTicks: 3, // small ticks inside each major tick
 *      greenFrom: 10.5,
 *      greenTo: 10.6,
 *      yellowFrom: 10.6,
 *      yellowTo: 10.7,
 *      redFrom: 10.7,
 *      redTo: 11
 *   }).gauge('setValue', 10.55 );
 *
 *   jQuery("#test_overflow_min").gauge().gauge('setValue', -15);
 *   jQuery("#test_overflow_max").gauge();
 *   jQuery("#test_overflow_max").gauge('setValue', 115); 
 *
 */
(function( $ ){
  var methods = {
    init : function( options ) { 
    
        return this.each(function(){
            var gauge = new Gauge( $(this)[0], options );
            $(this).data('gauge', gauge);
        });    
        
    },
    setValue : function( value ) { 
        return this.each(function(){
            var gauge = $(this).data('gauge');
            if (gauge != null) {        
                gauge.setValue( value );
            }
        });
    },
    draw : function( ) {  
        return this.each(function(){
            var gauge = $(this).data('gauge');
            if (gauge != null) {        
                gauge.draw();
            }
        });
    }

  };

  $.fn.gauge = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.gauge' );
    }    
  
  };
})( jQuery );
