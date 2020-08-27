function printArray(ar)
{
    console.log("___START___");
    ar.forEach(a => console.log(a));
    console.log("____END____");
}
var arr = [1,17,2,"ana",15];
/* forEach - arrow function - isNaN (not a number) */
//arr.forEach(Element => console.log( "out: "+ ( !isNaN(Element)))) ;
arr.splice(3,1);

printArray(arr);
arr.pop();
arr.shift();
arr.push(9,8);
arr.sort(function(a,b){return b-a;});
console.log(arr);
arr.reverse();
console.log(arr);

