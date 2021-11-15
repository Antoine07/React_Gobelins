const generate = (max = 20) =>{
    let numbers = [];

    while(numbers.length < max){
        // 1 et 20 large
        let number = Math.round( Math.random()*19 + 1 );
        while(numbers.includes(number) == true){
            number = Math.round( Math.random()*19 + 1 );
        }
        numbers.push(number);
    }
    return numbers;
}

let numbers =  generate();
numbers.sort((a,b) => a - b);
console.log(numbers);

/**
 *  Faire tourner un algorithme pour le comprendre et savoir si ce dernier fonctionne comme on l'entend.
 * 
 * numbers = []
 *  tant que (numbers.length < 20):
 *      number = 7
 *      tant que (numbers.includes(number) == false)
 *  
 *   numbers = [7]
 * 
 * tant que (numbers.length < 20):
 *      number = 7
 *      tant que (numbers.includes(number) == true)
 *          number = 5
 *      tant que (numbers.includes(number) == false)
 * 
 *   numbers = [7,5]
 * 
 */


// Le spread operator

// let nums = [1,2,3];
// let nums2 = nums; // même référence
// nums2[0] = 100;
// console.log(nums2);
// console.log(nums);


let nums = [1,2,3];
let nums2 = [ ...nums ]; // déballage des valeurs dans le tableau copie peu profonde
nums2[0] = 100;
console.log(nums2);
console.log(nums);

let nums3 = [ [1, 2],[3, 4], [5, 6] ];
let nums4 = [ ...nums3 ]; // déballage des valeurs dans le tableau copie peu profonde
nums4[0][0]= 100;
nums4[1]= [700,100];
console.log(nums3);
console.log(nums4);

console.log([1,2,3].slice(0,1))

console.log([1,2,3].slice(1))