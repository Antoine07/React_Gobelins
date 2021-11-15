# Objectif de la journée

Dans cette partie du cours on leurs montre le life cycle avec des classes uniquement. Ils feront le lien avec le useEffect après lorsqu'on abordera les Hooks.

## 01_J2_Life_Cycle

On détaille le life cycle avec eux pour qu'ils comprennent bien tous les enchaînements de ces actions de React.

On fait 2 exercices, le premier est relativement simple c'est un compteur qui est monté puis démonté au bout de quelques secondes, par contre le deuxième demande un peu plus d'attention, il introduit la mise à jour des states et props et leurs écoute.

Avant de faire le deuxième exerice on montrera bien la fonctionnalité React suivante :

```js
componentDidUpdate(prevProps, prevStates) {
    if (this.props.letter !== prevProps.letter) {
        this.setState({
            message : `Letter before : ${prevProps.letter} letter ${this.props.letter}`
        });
    }
}
```

### 01 Exercice Clocks

On gère le montage et le démontage d'une simple horloge.

### 02 Exercice Letters

Dans cet exercice on passe des lettres que l'on affiche de manière cyclique à un composant spécifique, on montre la lettre en question et la précédente à chaque seconde.

## 02_J2_Gestion_Event

On fera ici une introduction aux événements, mercredi on introduit, la CRA et les formulaires. On passe aux interactions doucement. 

Il y a un seul exercice sur des compteurs.

### Challenge 02

Par équipe de 2 sur Discord. Si possible commencez le challenge à partir de 15h30.

Il faut faire un pavage d'étoiles qui s'affiche ligne par ligne étoile par étoile. C'est l'occasion de mettre en place une App avec CRA ou Webpack. La journée de J3 faites la correction avec la CRA. Et expliquez dans les grandes lignes la solution Webpack. Dans ce cas faites attention aux version de Node.js préférez la version LTS de Node.js pour cette dernière approche.
