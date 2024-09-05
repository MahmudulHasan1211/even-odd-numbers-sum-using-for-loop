// sum of even numbers using for loop 
let sum = 0;
for (let i = 0; i < 20; i += 2) {
    console.log(i)
    sum = i + sum;
}
console.log('sum of even numbers are:', sum)

// sum of odd numbers using for loop 

let summation = 0;
for (let i = 0; i <= 21; i++) {
    if (i % 2 == 1) {
        console.log(i)
        summation = summation + i;
    }
}
console.log('sum of odd numbers are:', sum)

//sum of number from 1 to 49 that are divisible by 3

let total = 0;
for (i = 1; i<=49; i++){
    if(i % 3 === 0){
        console.log(i)
        total = total + i;
        console.log('summation:',summation)
    }
}
console.log('total :',total)