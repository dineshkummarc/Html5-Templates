camera = function() {
    var streaming = false,
        video = document.getElementById('video'),
        canvas = document.getElementById('canvas'),
        photo = $('#photo'),
        start = $('#start'),
        retry = $('#retry'),
        width = 320,
        height = 240;

    navigator.getMedia = ( navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);

    navigator.getMedia(
        {
            video: true,
            audio: false
        },
        function(stream) {
            if (navigator.mozGetUserMedia) {
                video.mozSrcObject = stream;
            } else {
                var vendorURL = window.URL || window.webkitURL;
                video.src = vendorURL ? vendorURL.createObjectURL(stream) : stream;
            }
            video.play();
        },
        function(err) {
            console.log("An error occured! " + err);
        }
    ); 

    video.addEventListener('canplay', function(ev){
        if (!streaming) {
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    start.click(function(e){
        takepicture();
    });

    retry.click(function() {
        retry.hide();
        photo.hide();
        start.show();
        video.style.display = "block";
    });

    function takepicture() {
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        var img = ctx.getImageData(0, 0, width, height);
        var pixels = img.data;
        var filter = $("#filter :radio:checked").attr('id')
        switch(filter) {
            case "grey":
                for(var i = 0; i < pixels.length; i+=4) {
                    var gray = (pixels[i] + pixels[i+1] + pixels[i+2]) / 3;
                    pixels[i] = pixels[i+1] = pixels[i+2] = gray;
                }
            case "blue":
                for(var i = 0; i < pixels.length; i+=4) {
                    var pixel = pixels[i];
                    pixels[i] = pixels[i+2];
                    pixels[i+2] = pixel;
                }
                break;

            case "hulk":
            case "retro":
                var degree = (filter == 'hulk' ? 270 : 140);
                
                var U = Math.cos(degree * Math.PI / 180);
                var W = Math.sin(degree * Math.PI / 180);
                for(var i = 0; i < pixels.length; i+=4) {
                    var red = pixels[i],
                        grn = pixels[i+1],
                        blu = pixels[i+2];
                    pixels[i]   = (.299 + .701 * U + .168 * W) * red
                                + (.587 - .587 * U + .330 * W) * grn
                                + (.114 - .114 * U - .497 * W) * blu

                    pixels[i+1] = (.299 - .299 * U - .328 * W) * red
                                + (.587 + .413 * U + .035 * W) * grn
                                + (.114 - .114 * U + .292 * W) * blu

                    pixels[i+2] = (.299 - .300 * U + 1.25 * W) * red
                                + (.587 - .588 * U - 1.05 * W) * grn
                                + (.114 + .886 * U - .203 * W) * blu
                }
                break;

            case "sepia":
                for(var i = 0; i < pixels.length; i+=4) {
                    var red = pixels[i],
                        grn = pixels[i+1],
                        blu = pixels[i+2];

                    pixels[i]   = (red * .393 + grn * .769 + blu * .189);
                    pixels[i+1] = (red * .349 + grn * .686 + blu * .168);
                    pixels[i+2] = (red * .272 + grn * .534 + blu * .131);
                } 
                break;

            case "solar":
                for(var i = 0; i < pixels.length; i+=4) {
                    // pixels[i] = red
                    // pixels[i+1] = green
                    // pixels[i+2] = blue
                    // pixels[i+3] = alpha
                    pixels[i] = Math.abs(pixels[i] - 255)
                    pixels[i+1] = Math.abs(pixels[i+1] - 255)
                    pixels[i+2] = Math.abs(pixels[i+2] - 255)
                }
                break;
        }

        img.data = pixels;
        ctx.putImageData(img, 0, 0);

        var data = canvas.toDataURL('image/png');
        photo.attr('src', data);

        video.style.display = "none";
        start.hide();
        photo.show();
        retry.show();
    }

}
