function Getallen() {
    var getal1 = Number(document.form.invoer1.value);
    var getal2 = Number(document.form.invoer2.value);
    for (var i = getal1; i < getal2; i++) {
        var getal = i.toString();
        var resultaat = 0;
        for (var j = 0; j <= getal.length; j++) {
            resultaat += Math.pow(Number(getal.charAt(j)), getal.length);
        }
        if (resultaat == i) {
            document.getElementById("Ngetallen").innerHTML += "<p class='narcisGet d-flex justify-content-center pt-3'>" + i + "</p>";
        }
    }
}
