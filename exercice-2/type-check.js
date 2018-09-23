
function type_check_v1(arg, str){
    if (typeof  arg === "null" || typeof arg === "undefined" || typeof str !== "string")
        return false;
    if (typeof arg === str){
        return true;
    }
    else {
        return false;
    }
}

console.log("V1: " + type_check_v1(1, "number"));

function type_check_v2(arg, obj){
    if (typeof  arg === null || typeof arg === "undefined" || typeof obj !== "object")
        return false;
    if (obj.type) {
        if (typeof arg !== obj.type) {
            return false;
        }
    }
    if (obj.value) {
        if (arg !== obj.value)
            return false;
    }
    if (obj.enum) {
        var enu = false;
        for (var i = 0; i < obj.enum.length; i++)
        {
            if (obj.enum[i] === arg)
                var enu = true;
        }
        if (enu === false)
            return false;
    }
    return true;
}

console.log("V2: " + type_check_v2(3, {enum: ["foo", "bar", 3]}));

function type_check(conf) {
    conf.properties.forEach((o) => {
        if (o.properties) {
            var bool = type_check(o);
            if (bool === false)
                return false;
        }
        var bool2 = type_check_v2(val, o);
        if (bool2 === false)
            return false;
    });
    return true;
}
