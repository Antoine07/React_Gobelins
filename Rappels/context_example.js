"use strict";

function Model(name){

    //this.name = name; 

    // par effet de bord il récupère le contexte soit Window dans une page Web soit Object avec Node.js
    // En mode strict this sera undefined si on ne crée pas de contexte.
    console.log(this);
}

// On ne l'appelle pas correctement donc dans ce cas this n'est pas le contexte de la fonction
Model("Alan");