//Case 1
function a(){
    console.log(b);
}

var b = 10;
a();

//Case2
function a1(){
    c1();
    function c1(){
        console.log(b1)//prints 100, as it's checks value of b1 first in it's scope then it's parent scope as it not find in both of the scope it will take value of global scope.
    }
}
var b1 = 100;
a1();

//Case3
function a2(){
    c2();
    function c2(){
        var b2 = 1000;
        console.log(b2);// prints 1000 as it takes value of b2 defined in its scope not in global scope.
    }
}
var b2 = 1;
a2();

//Case4
function a3(){
    var b3 = 10000;
    c3();
    function c3(){
        console.log(b3); // prints 10000, because it will take value from it's parent lexical environment not a global lexical environment.
    }
}
a3();
console.log(b3); //Uncaught ReferrenceError: b3 is not defined. b3 is defined in a function scope and it is not accessible outside it.