let a,date,time;
setInterval(() => {
    a = new Date();
    time=a.toLocaleTimeString();
    date =a.toDateString();
    document.getElementById('time').innerHTML = date + " and "+ time;
}, 1000);
