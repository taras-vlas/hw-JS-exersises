
console.log(document);
// const numberInputRef - ssikla na HTML
// querySelector - metod
// ('input[name="number"]') - selector atributa; .clas - selector clasa; #qwer - selector id;
// poverne ssylku na element: document
const numberInputRef = document.querySelector('input[name="number"]');
const powerInputRef = document.querySelector('input[name="power"]');

console.log(typeof numberInputRef.value); // ce stroka, slid peretvopyty v chislo

const buttonRef = document.querySelector('button');

console.log(buttonRef);

//buttonRef.addEventListener('click', () => {}); // strilochna funkciya
//buttonRef.addEventListener('click', function() {console.log('CLICK!');});
buttonRef.addEventListener('click', function() {
    console.log('numberInputRef.value', numberInputRef.value);
    console.log('powerInputRef.value', powerInputRef.value);  

    const number = Number(numberInputRef.value);
    const power = Number(powerInputRef.value);

    const result = Math.pow(number, power);
    console.log(result); 
});


// const numberInputRef = document.querySelector('input[name="number"]');
// const powerInputRef = document.querySelector('input[name="power"]');
// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', function() {
//     console.log('numberInputRef.value', numberInputRef.value);
//     console.log('powerInputRef.value', powerInputRef.value);  

//     const number = Number(numberInputRef.value);
//     const power = Number(powerInputRef.value);

//     const result = Math.pow(number, power);
//     console.log(result); 
// });