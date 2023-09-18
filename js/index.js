function writeCookie(name, val, expires) { var date = new Date; date.setDate(date.getDate() + expires); document.cookie = name + "=" + val + "; path=/; expires=" + date.toUTCString(); }
function readCookie(name) { var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)")); return matches ? decodeURIComponent(matches[1]) : undefined; }
function foo() {
    if (mintnumber < 50) { mintnumber = mintnumber + 2; writeCookie('minted', mintnumber, 4); document.getElementById("mintnumber").innerHTML = mintnumber; }
    if ((mintnumber >= 50) && (mintnumber < 138)) { mintnumber = mintnumber + 1; writeCookie('minted', mintnumber, 40); document.getElementById("mintnumber").innerHTML = mintnumber; }
    if (mintnumber >= 300) clearInterval(interval);
}
var mintnumber = +(readCookie('minted')); if (mintnumber > 0) { writeCookie('status', 'yes', 40); var mintnumber = +(readCookie('minted')); document.getElementById("mintnumber").innerHTML = mintnumber; } else { var mintnumber = 39; writeCookie('minted', 379, 40); }; var interval = setInterval(foo, 400)


var nmz = document.getElementById("mymintnumber").innerHTML
var number = parseInt(nmz);
var i = 2000;
var b = 30;


const timedz = setInterval(function () {
    i += b
    document.getElementById("mymintnumber").innerHTML = i; // Update the value in paragraph
    var nm = document.getElementById("mymintnumber").innerHTML
    if (i > 2050) {
        clearInterval(interval); // If exceeded 100, clear interval
    }
}, 2000); // Run for each second

timedz();