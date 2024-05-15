var a = 100;
let b = 1;
const c = 1000;
{
    var a = 10;
    let b = 20;
    const c = 0;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
