"use strict";
(function () {
    desktopOrMobile();
    dpiFix();
    debugClass();
    function desktopOrMobile() {
        function handle(mq) {
            document.documentElement.classList.toggle("mobile", mq.matches);
            document.documentElement.classList.toggle("desktop", !mq.matches);
        }
        var mm = window.matchMedia("(max-width: 750px)");
        mm.addListener(handle);
        handle(mm);
    }
    function dpiFix() {
        function handle(mq) {
            document.documentElement.classList.toggle("dpifix", mq.matches);
        }
        var mm = window.matchMedia("(max-device-width: 400px)");
        mm.addListener(handle);
        handle(mm);
    }
    function debugClass() {
        document.addEventListener("keydown", function (e) { keyPress(e, true); });
        document.addEventListener("keyup", function (e) { keyPress(e, false); });
        function keyPress(e, keydown) {
            if (e.keyCode === 18) {
                document.documentElement.classList.toggle("debug", keydown);
            }
        }
    }
})();
