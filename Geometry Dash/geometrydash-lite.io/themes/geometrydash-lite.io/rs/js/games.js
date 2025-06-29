document.addEventListener('DOMContentLoaded', function () {
    var shellpull = $('span#dark-pull');
    shellpull.on('click', function (e) {
        $('.dark-menu-header-mobile').css('width', '100%');
    });
    $("#expand").on('click', function () {
        $("#iframe_game_play").addClass("force_full_screen");
        requestFullScreen(document.body);

    });
    $("#_exit_full_screen").on('click', cancelFullScreen);
    function requestFullScreen(element) {
        $("body").css({"overflow-y": "hidden"});
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        if (requestMethod) {
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") {
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    function cancelFullScreen() {
        $('body').css({"overflow-y": "scroll"});
        $("#iframe_game_play").removeClass("force_full_screen");
        var requestMethod = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.exitFullScreenBtn;
        if (requestMethod) {
            requestMethod.call(document);
        } else if (typeof window.ActiveXObject !== "undefined") {
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    if (document.addEventListener) {
        document.addEventListener('webkitfullscreenchange', exitHandler, false);
        document.addEventListener('mozfullscreenchange', exitHandler, false);
        document.addEventListener('fullscreenchange', exitHandler, false);
        document.addEventListener('MSFullscreenChange', exitHandler, false);
    }

    function exitHandler() {
        if (document.webkitIsFullScreen === false
                || document.mozFullScreen === false
                || document.msFullscreenElement === false) {
            cancelFullScreen();
        }
    }
    
    
});
function darkunset() {
    $('.dark-menu-header-mobile').css('width', '0px');
}