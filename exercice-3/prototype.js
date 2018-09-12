
String.prototype.ucfirst = function ucfirst() {
    console.log(this);
    return this.charAt(0).toUpperCase() + this.slice(1);
};
console.log("test un truc".ucfirst());

String.prototype.capitalize = function capitalize(){
    return this.split(' ').map(function(str, ing){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }).join(' ');
};

console.log("test un truc".capitalize());

String.prototype.camelCase = function camelCase(){
    var final = this.split(' ').map(function(str, ing){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }).join('');
    final = final.split('_').map(function(str, ing){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }).join('');
    return final;
};

console.log("test un truc".camelCase());

String.prototype.snake_case = function snake_case() {
    return this.split(' ').map(function(str, ing){
        return str.charAt(0).toLowerCase() + str.slice(1).toLowerCase();
    }).join('_');
};

console.log("test un truc".snake_case());


function prop_access(str) {

}

String.prototype.leet = function leet() {
    str = this.replace(/a/g, "4");
    str = str.replace(/o/g, "0");
    str = str.replace(/e/g, "3");
    str = str.replace(/i/g, "1");
    str = str.replace(/u/g, "(_)");
    str = str.replace(/y/g, "7");
    return str;
};

console.log("test un truc".leet());


String.prototype.verlan = function verlan() {
    return this.split(' ').map(function(str, ing){
        var strSplit = str.split("");
        var splitReverse = strSplit.reverse();
        var final = splitReverse.join("");
        return final;
    }).join(' ');
};

console.log("test un truc".verlan());


String.prototype.yoda = function yoda() {
    var strSplit = this.split(" ");
    var splitReverse = strSplit.reverse();
    var final = splitReverse.join(" ");
    return final;
};

console.log("test un truc".yoda());



function vig(str) {

}
