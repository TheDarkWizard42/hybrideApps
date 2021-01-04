for (let i = 0; i < 1000; i++) {
    let getal: string = i.toString();
    let resultaat: number = 0
    for (let j = 0; j < getal.length; j++) {
        resultaat += Math.pow(Number(getal.charAt(j)), getal.length);
    }
    if (resultaat == i) {
        console.log(i);
    }
}