var p1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Klaar met 1.');
    }, 7000);
})

var p2 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Klaar met 2.');
    }, 5000);
})

var p3 = new Promise((resolve, reject) => {
    setTimeout(function(){
        reject('Fout');
    }, 3000);
})

console.log("starten");
p1.then(message => console.log("Bericht:" + message)).catch(error => console.log("Fout:"+error));
p2.then(message => console.log("Bericht:" + message)).catch(error => console.log("Fout:"+error));
p3.then(message => console.log("Bericht:" + message)).catch(error => console.log("Fout:"+error));
console.log("einde");