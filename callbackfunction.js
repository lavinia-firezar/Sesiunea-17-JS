// Pentru lista (array-ul)
let salaries = [1036, 3205, 2030, 2945];

// 1.
// Creaza o functie care primeste ca parametrul lista si
// returneaza prima valoare dvizibila cu 5. ( o poti numi 'simpleFind' :) )
// Hint: poti folosi break pentru a opri parcurgerea listei cand ai gasit valoarea dorita.

let simpleFind = (list) => {
    if( list % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

let exercise1 = salaries.find(simpleFind);
console.log(exercise1);

// 2.
// Creaza o functie care primeste o valoare si returneaza true daca este intre 2500 si 3000
let value;
function findValue(list) {
    for( let i = 0; i < list.length; i++ ) {
        if(list[i] > 2500 && list[i] < 3000) {
            value = list[i];
            console.log(value);
        } 
    } 
    return true;
}

let exercise2 = findValue(salaries);
console.log(exercise2);

// 3.
// Pornind de la codul functiei 'find' de mai sus creaza o functie care primeste ca parametrul lista si o functie callback
// si returneaza prima valoare care respecta conditia testata in functia callaback ( o poti numi 'find' )
// Apeleaza functia 'find' folosind functia de la punctul 2 ca si functie de callback

function myFindFunction(list,findCallback) {
    for(let i = 0; i < list.length; i++) {
        if(findCallback(value)) {
          break;
        }
    }
    return value;
}

let exercise3 = myFindFunction(salaries,findValue);
console.log(exercise3);

// 4. 
// Apeleaza functia de la punctul 3. cu lista (array-ul) salaries si o functie care testeaza ca o valoare e divizibila cu 10

function divisibleFunction(value) {
    if( value % 10 === 0) {
        return value;
    }
}

let exercise4 = salaries.find(divisibleFunction);
console.log(exercise4);