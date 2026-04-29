/*

//test1
let dayOfWeek = prompt( 'What day of the week is it?' );
console.log( 'chosen day: ', dayOfWeek );

if ( dayOfWeek == 'saturday' || dayOfWeek == 'sunday' );
{
    alert( 'Have a good weekend.' );
}
else
{
    alert( 'Have a good week' );
}


//test2

let number = prompt( 'Enter a number? ' );
console.log( 'Number: ', number );

if ( number % 2 === 0 );
{
alert( 'Number even' );
}
else { alert('number odd') };


//test3

let number = prompt( 'Enter a number.' );

if (number >= 100) {
    alert('Congratulation, you win.');
} else {
    alert('Try again to win.');
}


//test4

let name = prompt( 'Enter your name.' );
alert(`Welcome ${name}`);



//test5
let accountBalance = 500;
alert( `Your account balance is R$${ accountBalance }` );
console.log( `account balance: R$`, accountBalance );


//test6

let qtdNumeros = prompt( 'Digite a quantidade de números para o cálculo da média:' );
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
}

let media = soma / qtdNumeros;
contador--

console.log(media);


//test7

let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
let numero = parseInt( prompt( 'Digite o numero:' ) );
soma += numero;
contador--;
}

let media = soma / qtdNumeros;

console.log(media);

//test8
//Create a counter that starts at 1 and goes up to 10 using a while loop. Display each number.

let number = 1

while (number <= 10)
{
console.log( number )
number++
}

//test9
//Create a counter that start at 10 and goes up to 0 using a while loop. Diplay each number.

let number = 10;

while (number >= 0) {
    console.log(number)
    number--
}

//test10
//Create a programmer the counter regressive. Have a number and convert to number and 0, use in a while loop to console the navigator.

let number = 0;
let chooseANumber = prompt( `Choose a number` );

console.log( `Your choose the number: ${ chooseANumber } ` );

while (chooseANumber >= number) {
    console.log( `From number ${ chooseANumber } to ${ number }` );
    chooseANumber--;
}

//test11
//Create a program for counting forward. Ask for a number and count from 0 to that number using a while loop in the browser console.
let number = 0;
let chooseNumber = prompt( `Choose a number.` );

console.log( `Choose a number: ${ chooseNumber }` );

while ( number <= chooseNumber )
{
console.log( `Number: ${ number }.` );
number++;
}

//test12 | AND (&&) | as duas condições tem que ser verdadeiras.
let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir.");
}

//test12 | OR (||) | pelo menos uma das condições é verdadeira.

let temMaça = false;
let temBanana = true;

// se tem maça ou tem banana…
if (temMaça || temBanana) {
    console.log("Você tem frutas!");
} else {
    console.log("Não tem frutas.");
}

//test12
!	NEGAÇÃO	!(A == B)	Verdadeiro se A NÃO for igual a B

//test13
//Create a program that uses the console.log to display a welcome mensage.

console.log('Welcome');

//test14
//Create a variable called "name" and assign it your name. Then, use console.log to display the message "Hello, [your name]!" in the browser console.
let name = 'Guilherme';
console.log(`Hello, ${name}!`);

//test15
//Create a variable called "name" and assign it your name. Then, use alert to diplay the message "Hello, [your name]!"

let name = 'Guilherme';
alert( `Hello, ${ name }` );

//test16
//Use the prompt and ask the following question: What programming language do your like the most? Next, store the responsive in a variable end diplay it in the browser console.

let programmingLanguage = prompt( `What programming language do your like the most?` )
console.log(programmingLanguage);

//test17
//Create a variable called "value1" and another called "value2", assigning them numerical values ​​of your choice. Then, add these two values ​​and store the result in a third variable called "result". Use console.log to display the message "The sum of [value1] and [value2] is equal to [result]." in the console.


let value1 = Number(prompt( `Choose a number.` ));
let value2 = Number(prompt( `Choose another number.` ));
let result = value1 + value2;
console.log(`The sun of ${value1} and ${value2} equals ${result}.`);

//test18
//Create variable called "value1" and another called "value2", assigning them numerical values of your choice. Then, subtract these two values and store the result in a third variable called. Then the subtracted these two values and store the result in a third variable called "result". Use console.log to display the message "The difference between [value1] and [value2] is equal to [result]" in the console.
let value1 = Number(prompt('Choose a number')) ;
let value2 = Number(prompt( 'Choose another number' ));
let result = value1 - value2;

console.log(`The subtraction of ${value1} and ${value2} equals ${result}.`);

//test19
//
*/
