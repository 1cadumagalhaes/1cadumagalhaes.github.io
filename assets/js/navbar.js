function touchHandler(selector, type, callback) {
    var el = $(selector), swipedir, dist, startX;
    el.addEventListener('touchstart', function (e) {
        startX = e.changedTouches[0].pageX;
    }, { passive: true });
    el.addEventListener('touchend', function (e) {
        dist = e.changedTouches[0].pageX - startX;
        swipedir = dist > 0 ? -1 : 1; //left : right
        if (type == 'direction')
            callback(swipedir);
        else if (type == 'position') callback(startX, swipedir)
    }, { passive: true });
}

document.addEventListener('mousedown', function (e) {
    var t = e.target;
    if (t.id != "topnav" && t.id != "closebtn") {
        var isResponsive = !!$('.responsive').length
        if (isResponsive) {
            responsive();
        }
    }
})

function responsive() {
    toggleClass('topnav', 'responsive');
    toggleClass('topnav', 'shadow');
    toggleClass('closebtn', 'responsive');
}

function darkMode() {
    toggleClass(document.documentElement, 'dark-mode');
    darkmodestate = !darkmodestate;
    window.localStorage.setItem('dark-mode', darkmodestate);
    window.dataLayer.push({user:{darkmode:darkmodestate}});
}