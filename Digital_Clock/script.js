const clock = document.querySelector("#clock");

let date = new Date();

// We use SetInterval method => give a method and time it will run for countiuse
// 2 parameter first is method and second in time.
setInterval(function () {
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)