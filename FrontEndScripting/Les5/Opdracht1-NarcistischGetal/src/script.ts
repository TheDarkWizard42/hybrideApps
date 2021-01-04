function Getallen() {
    let getal1: number = Number(document.form.invoer1.value);
    let getal2: number = Number(document.form.invoer2.value);
    for (let i = getal1; i < getal2; i++) {
        let getal: string = i.toString();
        let resultaat: number = 0;
        for (let j = 0; j <= getal.length; j++) {
            resultaat += Math.pow(Number(getal.charAt(j)), getal.length);
        }
        if (resultaat == i) {
            document.getElementById("Ngetallen").innerHTML += "<p class='narcisGet d-flex justify-content-center pt-3'>" + i + "</p>"
        }
    }
}
