/**
 * Created by yedong on 2017/5/9.
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placetag = document.getElementById("place");
    placetag.setAttribute("src", source);
    var span = document.getElementById("imgTitle");
    span.firstChild.nodeValue = whichpic.getAttribute("title");

}
function popUp(winUrl) {
    window.open(winUrl, "popup", "width=320,height=480");
}
window.onload = prepareLinks();
function prepareLinks() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < i.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}