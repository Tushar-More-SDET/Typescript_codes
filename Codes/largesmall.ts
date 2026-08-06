  
let arr:number[]= [33,44,22,54,4,77,98,22,56,782,98,43,31];

let smallest=arr[0];
let largest=arr[0];

for(const num of arr)
{

    if(num<smallest)
    {
        smallest=num;
    }

    if(num>largest)
    {
        largest=num;
    }
}

console.log("largest is ",largest)
console.log("smallest is ",smallest)

