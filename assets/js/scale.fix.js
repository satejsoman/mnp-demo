(function(document) {
var i;
    var metas = document.getElementsByTagName('meta'),
if (navigator.userAgent.match(/iPhone/i)) {
        changeViewportContent = function(content) {
  for (i=0; i<metas.length; i++) {
            for (var i = 0; i < metas.length; i++) {
    if (metas[i].name == "viewport") {
                if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
    }
  }
})(document);
  document.addEventListener("touchstart", gestureStart, false);
}
function gestureStart() { 
