(function(exports) {
    function copyData(src) {
        var dest = new Uint8ClampedArray(src.buffer);
        return dest;
    };

    function copyPixels(data, a, b) {
        data[b] = data[a];
        data[b+1] = data[a+1];
        data[b+2] = data[a+2];
        data[b+3] = data[a+3];
    }


var Filters = {};

Filters.ColorFilter = {
    name: 'Color Filter',
    values: {
        r: { min: -255, max: 255, val: 0 },
        g: { min: -255, max: 255, val: 0 },
        b: { min: -255, max: 255, val: 0 },
        a: { min: -255, max: 255, val: 0 }
    },

    apply: function(imgData, values) {
        var data = imgData.data;

        for(i=0, n=data.length; i<n; i += 4) {
            data[i] += values.r;
            data[i+1] += values.g;
            data[i+2] += values.b;
            data[i+3] += values.a;
        }
    }
};

/**
 * Sepia
 */
Filters.Sepia = {
    name: 'Sepia',
    values: {},

    apply: function(imgData, values) {
        var data = imgData.data,
            r, g, b;

        // formula from http://www.techrepublic.com/blog/howdoi/how-do-i-convert-images-to-grayscale-and-sepia-tone-using-c/120
        for(i=0, n=data.length; i<n; i += 4) {
            r = data[i];
            g = data[i+1];
            b = data[i+2];
            data[i]   = r*0.393 + g*0.769 + b*0.189;
            data[i+1] = r*0.349 + g*0.686 + b*0.168;
            data[i+2] = r*0.272 + g*0.534 + b*0.131;
        }
    }
};

/**
 * Black and white
 */
Filters.BlackAndWhite = {
    name: 'Black and White',
    values: {},

    apply: function(imgData, values) {
        var data = imgData.data,
            r, g, b;

        // formula from http://www.tannerhelland.com/3643/grayscale-image-algorithm-vb6/
        for(i=0, n=data.length; i<n; i += 4) {
            r = data[i];
            g = data[i+1];
            b = data[i+2];
            data[i]   = r*0.299 + g*0.587 + b*0.114;
            data[i+1] = r*0.299 + g*0.587 + b*0.114;
            data[i+2] = r*0.299 + g*0.587 + b*0.114;
        }
    }
}

/**
 * Invert
 */
Filters.Invert = {
    name: 'Invert',
    values: {},

    apply: function(imgData, values) {
        var data = imgData.data,
            r, g, b;

        // formula from http://www.tannerhelland.com/3643/grayscale-image-algorithm-vb6/
        for(i=0, n=data.length; i<n; i += 4) {
            r = data[i];
            g = data[i+1];
            b = data[i+2];
            data[i]   = 255 - r;
            data[i+1] = 255 - g;
            data[i+2] = 255 - b;
        }
    }
}

/**
 * Mirror Horizontal
 */
Filters.MirrorH = {
    name: 'Mirror (Horizontal)',
    values: {},

    apply: function(imgData, values) {
        var data = imgData.data,
            width = imgData.width,
            height = imgData.height;

        for(var j=0; j<height; ++j) {
            for(var i=0, n=width>>1; i<n; ++i) {
                copyPixels(data, (i+j*width)*4, (width-i+j*width)*4);
            }
        }
    }
};

/**
 * Mirror Vertical
 */
Filters.MirrorV = {
    name: 'Mirror (Vertical)',
    values: {},

    apply: function(imgData, values) {
        var data = imgData.data,
            width = imgData.width,
            height = imgData.height;

        for(var j=0, n=height>>1; j<n; ++j) {
            for(var i=0; i<width; ++i) {
                copyPixels(data, (i+j*width)*4, (i+(height*width-j*width))*4);
            }
        }
    }
}


/**
 * Blur
 */
Filters.Blur = {
    name: 'Blur',
    values: {
        radius: { min: 0, max: 10, val: 3 }
    },

    apply: function(imgData, values) {
        var radius = values.radius;
        radius = Math.min(radius, this.values.radius.max);
        radius = Math.max(radius, this.values.radius.min);

        stackBlurCanvasRGBA( imgData, imgData.width, imgData.height, radius );
    }
};

    exports.Filters = Filters;
})(this)