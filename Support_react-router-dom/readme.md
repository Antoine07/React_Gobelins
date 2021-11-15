# Router 

## Installation de la dépendance

```bash
npm i react-router-dom

```

## Contextualiser la racine principale de React

1. Utilisez BrowserRouter sur le composant racine

```js
<BrowserRouter>
    <Home />
    // ...
</BrowserRouter>
```

2. Définir les routes dans un composant Navigate par exemple

Dans la navigation vous utilisez soit Link ou NavLink (plus technique voir doc)

```js
import { NavLink } from "react-router-dom";
import Nav from "../Styles/Nav";

const Navigate = (props) => {

  const checkIsactive  = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "oragne" : "",
    };
  };

  return (
    <Nav>
      <ul>
        <li>
          <NavLink style={checkIsactive} to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/logs">LOGS</NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigate;
```

3. Le composant Navigate

Il faut placer ce composant à la racine apriori, et définissez les composants/routes

La syntaxe du Link ou NavLink doit matcher avec le path définit dans le composant Route. Attention ce composant se trouve dans le composant Routes.


```js

<BrowserRouter>
    <Navigate />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logs" element={<Log />} />
    </Routes>
</BrowserRouter>

```