# CRA

npx est normalement installé si vous avez Node.js sur votre machine. Si vous rencontrez des problèmes d'installation voyez la documentation ci-dessous :

[cra](https://create-react-app.dev/docs/getting-started)

Si vous souhaitez utiliser npx, vérifiez que vous n'avez pas la create-react-app installée de manière globale. La documentation retirez ce package avant d'utiliser npx.

npx si la cra est déjà installé en global ou en local cherchera dans cet ordre à l'utiliser pour faire l'installation. Par contre si vous n'avez pas fait l'installation de la CRA, npx télécharge sans l'installer la dernière version de la CRA. Cette dernière option est de toute évidence la plus optimisée.

```bash
# avec npm
npm uninstall -g create-react-app

# avec yarm
yarn global remove create-react-app
```

Lancez les commandes suivantes pour avoir la dernière version de la CRA configuré :

```bash
npx create-react-app my-app
cd my-app
# Démarre 
npm start 
```

Quelques commandes pratiques :

```bash
# démarre le serveur de production
npm start

# build les sources dossier build
npm run build

# build en supprimant toutes les dépendances inutiles
# Attention pas de retour en arrière possible...
npm run eject
```

### Structure de la CRA en mode développement

```text
app-stars
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public   <-- dossier public accès avec le live-server
│   ├── favicon.ico
│   ├── index.html <-- Point d'entrée de l'application
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js.    <-- Composant racine
    ├── App.test.js
    ├── index.css
    ├── index.js. <-- Bootstrap
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js  <-- tests 
```

Attention,  une fois que vous avez fait votre **build** vous aurez un dossier de build avec votre application pour la production. C'est ce dossier qu'il faudra mettre sur le serveur de production :

```text
# commande npm run build
build/
    ... <-- fichiers et dossiers pour la production
```



