function area(l)
{
    return l*l;
}

function test(func,l)
{
    return func(l);
}

let A = test(area,20);
console.log(A);