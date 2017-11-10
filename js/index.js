function prn(val) {
  document.write('<br>' + val);
}
prn('розрахунок числа фібоначі по порядковому номеру<br>');
const i=Number(prompt('введіть порядковий номер числа фібоначі,величину якого ви ,хочете знайти:'));
prn('порядковий номер числа:<br>'+i);
function fib(i){
    let sqrt5=Math.sqrt(5);
    const c=Number((1 + sqrt5) / 2);
    const b=Number((1-sqrt5) / 2);
    return (Math.pow(c, i) - Math.pow(b, i)) / sqrt5;
    
}
let result=fib(i);
prn('відповідь:<br>'+result);