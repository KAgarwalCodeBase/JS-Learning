getName();
console.log(x);
console.log(getName);
console.log(helloWorld);
var x = 10;

//function declaration suppor hoisting.
function getName(){
    console.log('Namasta Javascript');
}

//function experession does not support hoisting.
var helloWorld = function(){
    console.log("Hello World");
}