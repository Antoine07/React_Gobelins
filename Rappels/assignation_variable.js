const state = { username: '' }

const name = 'username';
const value = "Alan";

// diff avec le spread operator
const testState = { ...state, username : "Tony"}

console.log(testState);

// const newState = { ...state, name : value }
// On peut force JS à interpréter une variable lorsque l'on passe cette variable à un objet, on utilise les crochets
// sur la variable
const newState = { ...state, [name] : value }
console.log(newState);
