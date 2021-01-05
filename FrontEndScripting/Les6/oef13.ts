import { Huis } from "./Huis";
import { School } from "./School";

let school: School = new School();
let huis: Huis = new Huis();
let huis2: Huis = new Huis();
huis.aantalRuimtes = 3;
huis2.aantalRuimtes = 5;
school.Print();
huis.Print();
huis2.Print();