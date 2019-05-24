document.write("<script src='EXIF.js'></script>");

document.getElementById("imageGps").onclick = function() {
    EXIF.getData(this, function() {
        myData = this;

        // console.log(myData.exifdata);
        var latDegree = myData.exifdata.GPSLatitude[0].numerator;
        var latMin = myData.exifdata.GPSLatitude[1].numerator;
        var latSec = myData.exifdata.GPSLatitude[2].numerator;
        var latDirection = myData.exifdata.GPSLatitudeRef;

        var lonDegree = myData.exifdata.GPSLongitude[0].numerator;
        var lonMin = myData.exifdata.GPSLongitude[1].numerator;
        var lonSec = myData.exifdata.GPSLongitude[2].numerator;
        var lonDirection = myData.exifdata.GPSLongitudeRef;

        var latFinal = convertDMStoDD(latDegree, latMin, latSec, latDirection);
        console.log(latFinal);
        var lonFinal = convertDMStoDD(lonDegree, lonMin, lonSec, lonDirection);
        console.log(lonFinal);

        document.getElementById("goToGoogleMap").innerHTML = '<a href="http://www.google.com/maps/place/'+latFinal+','+lonFinal+'" target="_blank">Google Maps</a>';
    });
}

function convertDMStoDD(degrees, min, sec, direction) {
    var result = degrees + (min/60) + (sec/3600);

    if (direction == "S" || direction == "W") {
        result = result * -1;
    }

    return result;
}