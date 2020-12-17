function Colors() {
    for (let index = 0; index < 30; index++) {
        for (let index2 = 0; index2 < 40; index2++) {
        var r= Math.floor(Math.random()*256);
        var g= Math.floor(Math.random()*256);
        var b= Math.floor(Math.random()*256);
document.write("<div class='cirkel'  style=\"background-color: rgb("+r+", "+g+", "+b+"); display: inline-block;\"></div>")
        }
        document.write("<br>");
    }
}