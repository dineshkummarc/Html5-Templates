$(document).ready(function() {
    navigator.getUserMedia = ( navigator.getUserMedia ||
                               navigator.webkitGetUserMedia ||
                               navigator.mozGetUserMedia ||
                               navigator.msGetUserMedia );

    if(!navigator.getUserMedia) {
        console.log('Oops navigator.getUserMedia not available');
        alert("Oops navigator.getUserMedia not available");
        return;
    }

    var video,
        streaming,
        width = 600,
        height = 450,
        canvasVideo, contextVideo,
        canvas, context,
        imageFilter,
        worker,
        WITH_WORKER = true,
        takePhotoBtn,
        history,
        filtersElem,
        introElem;

    // Init
    (function() {
        video = $('<video>');
        video.on('canplay', function() {
            if(!streaming) {
                streaming = true;
                height = ((video[0].videoHeight / (video[0].videoWidth/width) ) >> 0) || height;
                video.attr('width', width);
                video.attr('height', height);
                canvasVideo.attr('width', width);
                canvasVideo.attr('height', height);
                canvas.attr('width', width);
                canvas.attr('height', height);
                canvas.show();
                filtersElem.show();
                introElem.hide();
            }
        });

        introElem = $('#intro');
        filtersElem = $('#filters');

        canvas = $('#canvas');
        context = canvas[0].getContext('2d');
        canvas.hide();
        filtersElem.hide();

        canvasVideo = $('<canvas>');
        contextVideo = canvasVideo[0].getContext('2d');

        // setup worker
        if(WITH_WORKER) {
            worker = new Worker('imgEffect.js');
            worker.onmessage = function(event) {
                context.putImageData(event.data.imgData, 0, 0);
            };
        }

        takePhotoBtn = $('#takePhotoBtn');
        takePhotoBtn.on('click', onTakePhotoBtnClicked);

        history = $('#history');
        history.css({
            'width': width,
            'height': 105
        });

        initSelectFilters();

        render();
    })();

    navigator.getUserMedia({video: true, audio: false}, function(stream) {
        var vendorUrl = window.URL || window.webkitURL;
        video[0].src = vendorUrl.createObjectURL(stream);
        video[0].play();

    }, function(err) {
        console.log('Oops an error occured... ' + err);
    });


    function initSelectFilters() {
        var filtersSelectElem = $('#filtersSelect'),
            optionElem;

        for(var i in Filters) {
            if(Filters.hasOwnProperty(i)) {
                optionElem = $('<option>');
                optionElem.attr('value', i);
                optionElem.text(Filters[i].name);

                filtersSelectElem.append(optionElem);
            }
        }

        filtersSelectElem.on('change', function(e) {
            var selectedValue = filtersSelectElem.val(),
                filter = Filters[selectedValue];

            var filterValuesElem = $('#filterValues'),
                input;

            filterValuesElem.text('');

            if(filter) {
                for(var i in filter.values) {
                    if(filter.values.hasOwnProperty(i)) {
                        filterValuesElem.append(i +':');
                        input = $('<input>');
                        input.attr('type', 'range');
                        input.attr('name', i);
                        input.attr('id', 'input' + i);
                        input.attr('value', filter.values[i].val);
                        input.attr('min', filter.values[i].min);
                        input.attr('max', filter.values[i].max);

                        filterValuesElem.append(input);
                        filterValuesElem.append('<br>');

                        input.on('change', function(e) {
                            updateGlobalFilter(selectedValue);
                        });

                    }
                }
            }

            updateGlobalFilter(selectedValue);
        });
    }

    function updateGlobalFilter(filterValue) {
        var filter = Filters[filterValue],
            value;

        imageFilter = {
            id: filterValue,
            values: {
            }
        };

        if(filter) {
            for(var i in filter.values) {
                if(filter.values.hasOwnProperty(i)) {
                    imageFilter.values[i] = $('#input' + i).val() >> 0;
                }
            }
        }
    }

    function render() {
        requestAnimationFrame(render);

        contextVideo.drawImage(video[0], 0, 0, width, height);
        var data = contextVideo.getImageData(0, 0, width, height);

        if(WITH_WORKER) {
            worker.postMessage({
                imgData: data,
                imgFilter: imageFilter
            });
        }
        else {
            if(imageFilter && Filters.hasOwnProperty(imageFilter.id)) {
                Filters[imageFilter.id].apply(data, imageFilter.values);
            }

            context.putImageData(data, 0, 0);
        }
    }

    function onTakePhotoBtnClicked() {
        var dataImg = canvas[0].toDataURL('image/png');
        addPhotoToHistory(dataImg);
    }

    function addPhotoToHistory(dataImg) {
        var img = $('<img>');
        img.attr('src', dataImg);
        img.attr('width', 100);
        img.attr('height', 80);


        var a = $('<a>');
        a.attr('href', dataImg);
        a.attr('target', '_blank');

        a.append(img);

        history.append(a);
        history.animate({
            scrollLeft: history.scrollLeft() + 100
        });
    }
});