import { Lijst } from "./Lijst"
import { Element } from "./Element"
let elementList: Lijst = new Lijst();

let element1: Element = new Element("Android", "Systeem");
let element2: Element = new Element("Versie ", "9");
let element3: Element = new Element("RAM ", "16GB");

elementList.Voegtoe(element1);
elementList.Voegtoe(element2);
elementList.Voegtoe(element3);
elementList.ToString();
elementList.Aantal();
elementList.Wissen();
elementList.Aantal();