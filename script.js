function updateclock(){
    const clock = document.getElementById("clock");
    if(clock)
        clock.textContent = newDate().tolocaleTimeString();
}

updateclock();
setInterval(updateclock, 1000);