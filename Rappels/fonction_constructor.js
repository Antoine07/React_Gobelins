
// fonction constructeur
function Model(name){
    this.name = name;
}

// le new crée le contexte this de la fonction constructeur
const model = new Model('Alan');
const model2 = new Model('Sophie');

// Un sucre syntaxique c'est une autre manière d'écrire quelque chose d'assez complexe à écrire, de manière plus expressive.

class Post{
    constructor(name){
        this.name = name;
    }
}

const p1 = new Post("posts");