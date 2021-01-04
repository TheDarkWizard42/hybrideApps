var weekdagen;
(function (weekdagen) {
    weekdagen[weekdagen["maandag"] = 0] = "maandag";
    weekdagen[weekdagen["dinsdag"] = 1] = "dinsdag";
    weekdagen[weekdagen["woensdag"] = 2] = "woensdag";
    weekdagen[weekdagen["donderdag"] = 3] = "donderdag";
    weekdagen[weekdagen["vrijdag"] = 4] = "vrijdag";
    weekdagen[weekdagen["zaterdag"] = 5] = "zaterdag";
    weekdagen[weekdagen["zondag"] = 6] = "zondag";
})(weekdagen || (weekdagen = {}));
;
for (var _i = 0, _a = Object.keys(weekdagen); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
console.log(Object(weekdagen));
