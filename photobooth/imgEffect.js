importScripts('libs/StackBlur.js', 'filters.js');

self.onmessage = function(event) {
    var imgData = event.data.imgData,
        imgFilter = event.data.imgFilter;

    if(imgFilter && Filters.hasOwnProperty(imgFilter.id)) {
        Filters[imgFilter.id].apply(imgData, imgFilter.values);
    }

    postMessage({
        imgData: imgData
    });
};