var arr = [
    ["naam", "text"],
    ["voornaam", "text"],
    ["adres", "text"],
    ["plaats", "text"],
    ["leeftijd", "text"],
    ["geslacht", "checkbox"],
    ["auto", "checkbox"],
    ["email", "email"],
    ["pwd", "password"],
    ["opmerking", "textarea"],
];

function showForm() {
    arr.forEach(element => {
        document.write(element[0]+" <input type=\""+element[1]+"\" name=\""+element[0]+"\" placeholder=\""+element[0]+"\"><br>")
    });
}

