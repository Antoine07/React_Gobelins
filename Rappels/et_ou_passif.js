
// pas d'erreur car dans un && si la première condition est fausse JS n'évalue pas la deuxième
console.log(  false && name ? "yes" : "no" );

// console.log(  name && false ? "yes" : "no" ); // ici on a une erreur

// Il existe le ou passif si la première condition est vrai JS ne vérifie pas la deuxième condition 
console.log(  true || name ? "yes" : "no" );


