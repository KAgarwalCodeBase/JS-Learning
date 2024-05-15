function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
console.log(z());

function g(){
    var b = 900;
    function x(){
        var a =7;
        function y(){
            console.log(a, b);
        }
        return y;
    }
    return x();
}
var r = g()
console.log(r())