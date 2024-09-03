// 3. Write a program that prints the first 10 numbers of the Fibonacci sequence.

let f1= 0, f2= 1;
console.log(f1);

 for( let i=1; i< 10; i++){
    console.log(f2);
    const next_fibo= f1+f2;
    f1= f2;
    f2= next_fibo;
 
 }
