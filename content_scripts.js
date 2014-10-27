(function () {
    window.addEventListener('keydown', function (evn) {
        var hit = ~[112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123].indexOf(evn.keyCode);
        if (!hit) {
            return;
        }
        evn.stopImmediatePropagation();
    }, true);
})();
