var darkmodestate = false;
var darkmode = window.localStorage.getItem('dark-mode')
var $ = function (...args) {
    var t = document.querySelectorAll(...args);
    if (t.length == 1) return t[0];
    return t
};


function toggleClass(element, className) {
    var classes;
    if (typeof element === 'string')
        classes = document.getElementById(element).classList;
    else classes = element.classList;
    classes.toggle(className);
}


function navSlide(value = 1, auto = false) {
    var t = +$('input[name="position"]:checked').value.match(/(\d+)/)[0];
    t = t + value
    if (t === 6) $('input[value="project1"]').click();
    else if (t === 0) $('input[value="project5"]').click();
    else $('input[value="project' + t + '"]').click();
    if (!auto)
        clearInterval(intervalId)
    return true;
}

document.addEventListener("DOMContentLoaded", function (event) {
    //var darkmode = window.localStorage.getItem('dark-mode');
    if (darkmode === null) {
        window.localStorage.setItem('dark-mode', darkmodestate);
    }
    darkmode = darkmode === 'true';
    if (darkmodestate != darkmode) {
        darkMode();
        $('#dark-switch').checked = darkmode;
    }

    $("#year").innerText = new Date().getFullYear()
    touchHandler('.nav', 'direction', function (dir) { if (dir > 0) responsive() });
    touchHandler('body', 'position', function (start, direction) {
        if (start <= 30 && direction == -1) responsive()
    });
});







