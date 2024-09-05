// sum of even numbers using for loop 
let sum = 0;
for (let i = 0; i < 20;  i+=2 ){
    console.log(i)
    sum = i + sum;
}
console.log('sum of even numbers are:',sum)

// sum of odd numbers using for loop 

let sum = 0;
for(let i=0; i <=21; i++){
    if (i % 2 == 1 ){
        console.log(i)
        sum = sum + i;
    }
}
console.log('sum of odd numbers are:',sum)