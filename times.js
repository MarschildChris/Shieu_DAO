const locat =  document.querySelector("div.time-z");



const updateTimes = function () {
    const output = locat.querySelector("p");

    const now = luxon.DateTime.now()

    output.innerHTML = now.toFormat("HH:mm:ss");
}

updateTimes();

setInterval(function(){updateTimes()}, 1000)