$(document).ready( function() {
    $("#alertButton").click( function() {
        jAlert('This is a custom alert box', 'Alert Dialog');
        return false;
    });

    $("#confirm_button").click( function() {
        jConfirm('Can you confirm this?', 'Confirmation Dialog', function(r) {
            jAlert('Confirmed: ' + r, 'Confirmation Results');
            return false;


        });
        return false;
    });

    $("#prompt_button").click( function() {
        jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
            if( r ) alert('You entered ' + r);
            return false;
        });
        return false;
    });

    $("#alert_button_with_html").click( function() {
        jAlert('You can use HTML, such as <strong>bold</strong>, <em>italics</em>, and <u>underline</u>!');
        return false;
    });

    $("#alert_style_example").click( function() {
        $.alerts.dialogClass = $(this).attr('id'); // set custom style class
        jAlert('This is the custom class called &ldquo;style_1&rdquo;', 'Custom Styles', function() {
            $.alerts.dialogClass = null; // reset to default
            return false;
        });
        return false;
    });


});