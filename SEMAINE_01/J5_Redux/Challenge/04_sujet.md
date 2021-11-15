# 04 sujet Challenge Calculatrice

Vous allez faire une petite calculatrice en utilisant **useReducer** pour appliquer son principe.

Oragnisez l'application comme suit :

```text
reducers/
    calcul.js
actions/
    actions-types.js
constants/
    actions.js
Styles/
    Bouton.js   <-- touche de votre calculatrice
    Global.js   <-- Styles globaux de votre application, voir dans la partie annexe comment les mettre en place.
components/
    Calculator.js 

App.js
```

Utilisez cette fois les dépendances suivantes :

1. La CRA

2. Styled Components

Créez un champ de saisi fictif et 10 boutons de 0 à 9 pour afficher dans la partie "saisie" le nombre tapé. Créez les trois boutons suivants :

1. Un bouton + pour effectuer l'addition.

2. Un bouton - pour effectuer la soustraction.

3. Un bouton X pour faire la multiplication.

Vous gérez les erreurs de saisie, interdiction de saisir autre chose qu'un numérique.

```text
[ 9182 ]

[7] [8] [9]

[4] [5] [6]

[1] [2] [3]

[0]
```

## Annexes

Pour les styles globaux vous devez les définir dans le fichier Globals.js dans le dossier Style. Vous pouvez les compléter.

```js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
  body {
    margin: 2rem;
    background: #0D0C1D;
    color: #EFFFFA;;
    font-family: system-ui;
    font-size: 1.8rem;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
```

Puis les insérer dans le composant racine  App.js, ils s'appliqueront à l'ensemble des composants.

```js
 <>
<GlobalStyle />
<div>
  // ... 
</div>
</>
```