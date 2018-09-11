function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("ucfirst: " + ucfirst("test un truc"));

function capitalize(str){
    return str.split(' ').map(function(str, ing){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }).join(' ');
}

console.log("capitalize: " + capitalize("test un tRuc"));

function camelCase(str){
    return str.split(' ').map(function(str, ing){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }).join('');
}

console.log("camelCase: " + camelCase("test un truc"));

function snake_case(str) {
    return str.split(' ').map(function(str, ing){
        return str.charAt(0).toLowerCase() + str.slice(1);
    }).join('_');
}

console.log("snake_case: " + snake_case("test un truc"));

function prop_access(str) {

}

function leet(str) {
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
    return str.split(' ').map(function(str, ing){
        var strSplit = str.split("");
        var splitReverse = strSplit.reverse();
        var final = splitReverse.join("");
        return final;
    }).join(' ');
}

console.log("verlan: " + verlan("test un truc"));

function yoda(str) {
    var strSplit = str.split(" ");
    var splitReverse = strSplit.reverse();
    var final = splitReverse.join(" ");
    return final;
}
console.log("yoda: " + yoda("test un truc"));



function vlg(str) {

}
