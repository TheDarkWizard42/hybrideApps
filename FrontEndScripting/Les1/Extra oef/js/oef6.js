function vindLangsteWoord(zin){
var langste="";
zin = zin.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var woorden = zin.split(' ');
woorden.forEach(element => {
    if (element.length > langste.length) {
        langste=element;
    }
});
return langste;
}