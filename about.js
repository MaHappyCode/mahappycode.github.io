var a;

function btn_hide_show() {
    if (a==1){
        document.getElementById("windo").style.display="inline";
        return a=0;
    } else {
        document.getElementById("windo").style.display="none";
        return a=1;
    }
}
