export class Opleiding {
    public naam: string;
    public docent: string;
    public datum: Date;
    public einddatum: Date;
    public aantalDagen: number;
    constructor(naam: string, docent: string, datum: Date, einddatum: Date) {
        this.datum = datum;
        this.naam = naam;
        this.docent = docent;
        this.einddatum = einddatum;
        this.aantalDagen = weekdaysBetween(datum, einddatum)
    }
}
function weekdaysBetween(startDate, endDate) {
    if (startDate < endDate) {
        var s = startDate;
        var e = endDate;
    } else {
        var s = endDate;
        var e = startDate;
    }
    var diffDays = Math.floor((e - s) / 86400000);
    var weeksBetween = Math.floor(diffDays / 7);
    if (s.getDay() == e.getDay()) {
        var adjust = 0;
    } else if (s.getDay() == 0 && e.getDay() == 6) {
        var adjust = 5;
    } else if (s.getDay() == 6 && e.getDay() == 0) {
        var adjust = 0;
    } else if (e.getDay() == 6 || e.getDay() == 0) {
        var adjust = 5 - s.getDay();
    } else if (s.getDay() == 0 || s.getDay() == 6) {
        var adjust: number = e.getDay();
    } else if (e.getDay() > s.getDay()) {
        var adjust = e.getDay() - s.getDay();
    } else {
        var adjust = 5 + e.getDay() - s.getDay();
    }
    return (weeksBetween * 5) + adjust;
}