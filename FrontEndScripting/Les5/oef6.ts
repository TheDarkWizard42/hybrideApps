import { Factuur } from './Factuur';

let factuur1: Factuur = new Factuur();
factuur1.nummer = 101;
factuur1.klantnummer = 15;
factuur1.bedrag = 20;
let factuur2: Factuur = new Factuur();
factuur2.nummer = 102;
factuur2.klantnummer = 37;
factuur2.bedrag = 105;

for (var item in factuur1) {
    console.log(item + ': ' + factuur1[item]);
}
for (var item in factuur2) {
    console.log(item + ': ' + factuur2[item]);
}