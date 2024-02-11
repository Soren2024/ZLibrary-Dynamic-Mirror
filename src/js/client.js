let lang = navigator.language;
if(lang=="zh-CN"){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Todo: Parse return information
        }
    };
    xhttp.open("GET", "https://www.awaland.xyz/zlibrary/cn/message.json", true);
    xhttp.send();
}