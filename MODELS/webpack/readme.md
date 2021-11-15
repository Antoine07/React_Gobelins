
# Webpack & React (plus technique)

Vous mettez en place React avec Webpack pour avoir un cadre de travail de développement. 

Créez la structure de dossiers et fichiers suivantes :

```text

--- assets statics  PRODUCTION

public/
    index.html <-- le point d'entrée de l'application
    bundle.js  <-- Un fichier de build JS pour le navigateur

--- partie développement

src/
    App.js     <-- Le code React
    App.css
    index.js   <-- Le bootstrap 
.babelrc       <--  Permet de transcrire le JSX & syntaxe moderne en JS pour les navigateurs 
webpack.config.js <-- fichier de configuration pour le build et reload de React
```

- Installez les dépendances suivantes. Utilisez le modèle dans le dossier MODELS react_webpack et tapez les lignes de commande suivantes à la racine de ce dossier.

```bash
# Initialisation du projet
npm init -y 

# les dépendances React et ReactDOM
npm i react react-dom

# Gestion des styles 
npm i styled-component

# Pour le build et la compilation des JSX ...
npm i webpack webpack-cli webpack-dev-server --save-dev
npm i @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader style-loader --save-dev
```

Testez l'application en tapant la ligne de commande suivante :

```bash
# Qu'une seule fois pour créer les dossiers de build
npm run build

# Puis lancez le watch et le navigateur
npm run start
```

### Structure de l'application développement et production 

#### Fichiers

- .babelrc

```text
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
 }
 ```

- webpack.config.js

 ```js
"use strict";

const path = require("path");
const webpack = require("webpack");

const config = {
  entry: [path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        APP_ENV: JSON.stringify("development"),
        TIME: JSON.stringify(20 * 500),
        MAX_LINES: JSON.stringify(10),
        TIME_STAR: JSON.stringify(500),
        NUMBER_STARS: JSON.stringify(20),
      },
    }),
  ],
};

module.exports = config;
```

- index.js

Le bootstrap de l'application

```js
import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import "./App.css"

ReactDom.render(<App />, document.getElementById('root'))
```

- App.js 

Vos composants seront développés dans un dossier components sauf le fichier App.js, composant racine de votre application.

```js
import React from "react";

class App extends React.Component {

    render(){

        return(
           <p>Hello React ! </p>
        )
    }
}

export default App;
```
