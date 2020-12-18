var cars2 = cars.filter(
    function(elem){
        if(elem.Horsepower > 140 && elem.Acceleration > 11){
            return true;
        }
    }
)
console.log(JSON.stringify(cars2));