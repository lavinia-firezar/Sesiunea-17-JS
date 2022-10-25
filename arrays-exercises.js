// Se da urmatorul array:
let products = [
    {
      id: 67,
      name: 'Firestrata',
      price: 26,
      brewery: 'Hop Hooligans'
    },
    {
      id: 212,
      name: 'Punch the Clock',
      price: 21,
      brewery: 'Bereta'
    },
    {
      id: 111,
      name: 'The Guardian',
      price: 21,
      brewery: 'Noah'
    },
    {
      id: 345,
      name: 'Pudge',
      price: 30,
      brewery: 'Hop Hooligans'
    }
  ]
  
  // 1. Folosind metoda aferenta, returneaza din array-ul de mai sus produsul cu numele "Punch the Clock".
// punchFunction = callback
 let punchFunction = (product) => {
  if (product.name === 'Punch the Clock') {
    return true;
  } else {
    return false;
  }    
 }

 let punch = products.find(punchFunction);
 console.log(punch);   

 // 2. Folosind metoda aferenta, returneaza un array care sa contina doar produsele de la "Hop Hooligans".

 let hopFunction = (product) => {
  if (product.brewery === 'Hop Hooligans') {
    return true;
  } else {
    return false;
  }
 }
    
 let hop = products.filter(hopFunction);
 console.log(hop);

 // 3. Folosind metoda aferenta, returneaza un nou array, care sa nu contina produsul cu id-ul 212.

let idFunction = (product) => {
  if (product.id != '212') {
    return true;
  } else {
    return false;
  }
}

let pop = products.filter(idFunction);
console.log(pop);

// 4. Calculeaza suma tuturor produselor din array.
let sum = 0;
let sumFunction = (product) => {
  if ( sum = sum + product.price ) {
  return true;  
  }
  return false;
}
  
let mySum = products.forEach(sumFunction);
console.log(sum);

console.log('---')

// 5. Fara a modifica array-ul initial, retuneaza un array nou, in care fiecare element are o noua proprietate: "isFavorite", cu valoarea false. 
// method 1
// function newArray(products) {
//   for( i = 0; i < products.length; i++ ) {
//     products[i].isFavorite = false;
//   }
//   return products;
// }

// console.log(newArray(products));
// console.log('---')
// method 2

let complexProducts = (product) => {
  let productCopy = Object.assign({}, product);
  productCopy.idFavorite = false;
  return productCopy;
}

let myNewProducts = products.map(complexProducts);
console.log(myNewProducts);

console.log(products);

