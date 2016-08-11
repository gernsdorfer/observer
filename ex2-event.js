function onMyCustomEvent (cb) {
    let counter = 0;
    function myEvent () {
        cb(counter.toString());
        counter++
    }
    setInterval(myEvent, 1000);
}
onMyCustomEvent((eventValue)=> console.log(eventValue));
