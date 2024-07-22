(function () {
    const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

//I'm adding this section so I don't have to keep updating this pen every year :-)
//remove this if you don't need it
let today = new Date(),
dd = String(today.getDate()).padStart(2, "0"),
mm = String(today.getMonth() + 1).padStart(2, "0"),
yyyy = today.getFullYear(),
nextYear = yyyy + 1,
dayMonth = "03/26/",
birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
x = setInterval(function() {    

    const now = new Date().getTime(),
        distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    if (distance < 0) {
    document.getElementById("headline").innerText = "It's my birthday!";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    clearInterval(x);
    }
    //seconds
}, 0)
}());



 // -------js for typewrite in header part-----
                
 var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wcmp-typewrite-header-wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('wcmp-typewrite-header');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".wcmp-typewrite-header > .wcmp-typewrite-header-wrap { border-right: 0.05em solid #E47A80 }";
    document.body.appendChild(css);
};


