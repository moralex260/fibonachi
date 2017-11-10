function prn(val) {
   document.write('<br>' + val);}
prn('розрахунок числа фібоначі по порядковому номеру<br>');
const n = Number(prompt('введіть порядковий номер числа фібоначі,величину якого ви ,хочете знайти:'));
prn('порядковий номер числа:<br>' + n);
//function fib(n) {
 //   if (n <= 0) return 0;
  //  else if (n == 1) return 1;
  //  else return fib(n - 1) + fib(n - 2);
//}
//let res = fib(n);
//prn('відповідь:' + res);

let fib =[1,1];
for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i- 2];

let a=fib[i];
prn('відповідь:' +a );}