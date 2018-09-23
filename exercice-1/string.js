function ucfirst(str) {
    if (typeof str !== 'string')
        return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("ucfirst: " + ucfirst("test"));

function capitalize(str){
    if (typeof str !== 'string')
        return "";
    return str.split(' ').map(function(str, ing){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }).join(' ');
}

console.log("capitalize: " + capitalize("ipsum DOLOR"));

function camelCase(str){
    if (typeof str !== 'string')
        return "";
    var final = str.split(' ').map(function(str, ing){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }).join('');
    final = final.split('_').map(function(str, ing){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }).join('');
    return final;
}

console.log("camelCase: " + camelCase("ToggleCase is_the cOolest"));

function snake_case(str) {
    if (typeof str !== 'string')
        return "";
    return str.split(' ').map(function(str, ing){
        return str.charAt(0).toLowerCase() + str.slice(1).toLowerCase();
    }).join('_');
}

console.log("snake_case: " + snake_case("ToggleCase is_the coolest"));

function prop_access(str) {

}

function leet(str) {
    if (typeof str !== 'string')
        return "";
    str = str.replace(/a/g, "4");
    str = str.replace(/o/g, "0");
    str = str.replace(/e/g, "3");
    str = str.replace(/i/g, "1");
    str = str.replace(/u/g, "(_)");
    str = str.replace(/y/g, "7");
    return str;
}

console.log("leet: " + leet("anaconda un trutu"));


function verlan(str) {
    if (typeof str !== 'string')
        return "";
    return str.split(' ').map(function(str, ing){
        var strSplit = str.split("");
        var splitReverse = strSplit.reverse();
        var final = splitReverse.join("");
        return final;
    }).join(' ');
}

console.log("verlan: " + verlan("test un truc"));

function yoda(str) {
    if (typeof str !== 'string')
        return "";
    var strSplit = str.split(" ");
    var splitReverse = strSplit.reverse();
    var final = splitReverse.join(" ");
    return final;
}
console.log("yoda: " + yoda("test un truc"));

function prop_access(prop, str){
    if (typeof str !== 'string')
        return "";
    var path = str.split(".");
    for (var step in path){
        if (typeof prop[path[step]] !== "undefined")
            return prop[path[step]];
        else {
            prop = undefined;
            break
        }
    }
}

function vig(str) {
    return "function empty";
}

