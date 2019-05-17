function start() {
    console.log("Request handler 'start' was called");

    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        
        whild (new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000);

    return "start";
}