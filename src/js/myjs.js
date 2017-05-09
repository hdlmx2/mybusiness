/**
 * Created by yedong on 2017/5/9.
 */
function showPic(whichpic) {
    if (!document.getElementById("place"))return false;

    var source = whichpic.getAttribute("href");
    var placetag = document.getElementById("place");
    placetag.setAttribute("src", source);
    if (document.getElementById("imgTitle")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var span = document.getElementById("imgTitle");
        if (span.firstChild.nodeType === 3) {
            span.firstChild.nodeValue = text;
        }
    }
    return true;

}
function popUp(winUrl) {
    window.open(winUrl, "popup", "width=320,height=480");
}
function prepareLinks() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < i.length; i++) {
        if (links[i].getAttribute("class") === "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}
function prepareGallery() {
    if (!document.getElementsByTagName || !document.getElementById)return false;
    if (!document.getElementById)return false;
    if (!document.getElementById("imageGallery")) {
        return false;
    }
    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);

        }
    }

}
function addLoadEvent(func) {
    var load = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}