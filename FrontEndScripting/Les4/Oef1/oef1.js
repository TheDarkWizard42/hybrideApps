var dagen = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];
dagen.forEach(
    function(element){
        if (element.length > 7 && element.charAt(0) != "w"){
            console.log(element);
        }
    }
)