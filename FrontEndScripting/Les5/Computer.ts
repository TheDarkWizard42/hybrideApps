export class Computer{
    public  merk:string;
    public type: string;
    public prijsexcl:number;
    public prijsincl:number;
    constructor(m:string, t:string, pexl:number){
this.merk=m;
this.type=t;
this.prijsexcl=pexl;
this.prijsincl=pexl*1.21;
    }
}