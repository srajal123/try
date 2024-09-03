// 2. Create a function that checks if a number is even or odd.

function checkEvenOdd(number){
    if (number % 2 == 0){
        return "is even.";

    }
    else{
       return "is odd.";
    }
}
let x= 8;
const result= checkEvenOdd(x);
console.log(`Result: ${x}`,result);