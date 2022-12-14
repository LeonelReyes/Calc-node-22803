// 1 capturar los ingresos numéricos - var
// 2 capturo lso/el ingreso de operación - var
// ruta del DOM del resultado o visor
// eventos en los botones 1 2

const display = document.getElementById('display');
const botones = document.querySelectorAll('button');
console.log(botones, typeof botones);

const operacionesS = {
  '+': (num1, num2) => Math.round((Number(num1) + Number(num2)) * 1000000) / 1000000,
  '-': (num1, num2) => Number(num1) - Number(num2),
  '*': (num1, num2) => Number(num1) * Number(num2),
  '/': (num1, num2) => Number(num1) / Number(num2),
  sin: (num1) => Math.round(Math.sin(Number(num1)) * 1000000) / 1000000,
  cos: (num1) => Math.round(Math.cos(Number(num1)) * 1000000) / 1000000,
  tg: (num1) => Math.round(Math.tan(Number(num1)) * 1000000) / 1000000,
  'x³': (num1) => Math.round(Math.pow(Number(num1), 3)),
  'xⁿ': (num1) => Math.round(Math.pow(Number(num1), num2)),
  '∛': (num1) => (Math.pow(Number(num1), 1 / 3))
}


const isOperation = (content) => {
  return operacionesArray.some((operacion) => operacion === content);
}

const realizarOperacion = (content) => {
  // display.textContent = content;
  console.log(`click! ${content}`);
  
  if( num1 === undefined) {
    // if(content!== 'AC'){
    //   num1 = content;
    // } else {
    //   display.textContent = 0;
    // }
    num1 = content;
    //console.log({trim: num1.substring(0,7)});
    display.textContent = num1;
    
    console.log({num1});
    return;
  } else if (
    !isOperation(content) &&
    // content !=='+' &&
    // content !== '-' &&
    // content !== '*' &&
    // content !== '/' &&
    // content !== 'sin' &&
    // content !== 'AC' &&
    !operacion
    ) {
      num1 += content; 
      display.textContent = num1;
      console.log({num1});
      console.log(content);
      console.log(operacion);
      return;
    }  else if (content === 'AC') {
      display.textContent = 0;
      num1 = undefined;
      num2 = undefined;
      operacion = undefined;
      console.log(num1, num2, operacion);
      return;
    //} else if (content === 'sin') {
    //   const sin = display.textContent = operacionesS.sin(num1);
    //   return;
    } else if(operacion === undefined && isOperation(content)) {
      operacion = content;
      display.textContent = num1 + operacion;
      console.log({operacion});
      if (content === 'sin' | content === 'cos' | content === 'tg' | content === 'x³' | content === '∛' | content === 'cos' | content === 'cos' | content === 'cos' ) {
        const resultado = display.textContent = operacionesS[operacion](num1 , num2);
        console.log(operacion);
      }
      return;
    } else if(num2 === undefined) {
      num2 = content;
      display.textContent = num1 + operacion + num2;
      console.log({num2});
      return;
    }
    else if (content !== '=') {
      num2 += content; 
      display.textContent = num1 + operacion + num2;
      console.log({num2});
      return;
    } else if (content === '=') {
      const resultado = display.textContent = operacionesS[operacion](num1, num2);
      console.log(operacion);
    } 
    
    // } else if (content === '=' && operacion === '+'){
    //   console.log('uiii')
    //   display.textContent = operacionesS.suma(num1, num2);
    //   // display.textContent = (Number(num1 )+ Number(num2));
    // } else if (content === '=' && operacion === '-'){
    //   console.log('uiii')
    //   display.textContent = operacionesS.resta(num1, num2);
    //   // display.textContent = (Number(num1 )+ Number(num2));
    // }  else if (content === '=' && operacion === '*'){
    //   console.log('uiii')
    //   display.textContent = operacionesS.multiplicacion(num1, num2);
    //   // display.textContent = (Number(num1 )+ Number(num2));
    // }  else if (content === '=' && operacion === '-'){
    //   console.log('uiii')
    //   display.textContent = operacionesS.division(num1, num2);
    //   // display.textContent = (Number(num1 )+ Number(num2));
    // }
    
  };
  let num1, num2, operacion;
  let i = 0;
  const operacionesArray = ['+', '-', '*', '/', 'sin', 'cos', 'tg', 'x³', '∛' , 'xⁿ' , '(' , ')' , 'x!' , 'x²' , '√' , 'ⁿ√' , 'ln' , 'e' , 'log' , '%' , 'MR' , 'AC', ];
  for (i=0; i< botones.length; i++) {
    const content = botones[i].innerHTML;
    botones[i].addEventListener('click', () => realizarOperacion(content));
  }

// console.log(botones);



// const button1 = document.getElementById('n1'); 
// button1.addEventListener('click', () => {
//     display.textContent = button1.innerHTML;
//     console.log(`click! ${button1.innerHTML}`);
// });

// let operacion = document.querySelector('#suma').innerHTML;

// console.log(numero1 operacion numero2);
// const suma = (sum1, sum2) => {
//     return sum1 + sum2;
// }
// console.log(suma);

const operaciones = (op, num1, num2) => {
 
    if (op == '+'){
        return suma(num1, num2)
    }
}

// display.textContent = operaciones(operacion, numero1, numero2);

// console.log(operaciones(operacion , numero1, numero2));
