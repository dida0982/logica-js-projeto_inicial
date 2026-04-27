alert( "Welcome to the secret number game!" );

let numberSecret = 5;
let kick;
let attempts = 1;

console.log( 'Number secret: ', numberSecret );

while ( kick != numberSecret ){
    kick = prompt( "Choose a number between 1 and 30" );

    if ( numberSecret == kick ) {
        alert( `That's it! You discovered the secret number ${numberSecret}! with ${attempts} attempts.` );
    } else{
        if ( kick > numberSecret  ){
            alert( `The secret number is less than ${ kick }` );
        } else{
            alert(`The secret number is greater than ${ kick }`);
        }
        alert( "Try again." );
    }
    attempts++
}

console.log( 'attempts: ', attempts );




















//Test:
//alert( 'Welcome to our website.' )

//let name = 'Moon';
//let age = 25;
//let numberOfSales = 50;
//let availableBalance = 1000;

//alert( 'Error! Please fill in all fields.' );

//let mensageOfError = 'Error! Please fill in all fields.';
//alert( mensageOfError );

//let name = prompt( 'What is your name?' );
//console.log(name)

//let age = prompt('How old are your?')
//console.log( age )

//if ( age >= 18 ){
//    alert( 'Can get a drivers license.' );
//}
//else { alert( 'You cant get your drivers license.' ); }
