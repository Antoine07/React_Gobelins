# Lifting State Up

Parfois des composants doivent faire remonter des données dynamiques à leur parent direct. Nous allons découvrir cette technique dans un exercice d'application.

Voici un exemple pour bien expliciter la problématique.

Supposons que l'on ait deux composants Foo et bar :

```text
    Foo
    .
    .
    .
    Bar
```

Et que Bar fasse remonter un état à son composant parent direct.

- On passe une méthode du composant parent Foo à l'enfant direct Bar.

- Dans Bar on crée un événement qui appelera la méthode de Foo en lui passant éventuellement une/des valeurs. C'est-à-dire un état local à Bar que l'on passe à Foo (Lifting state up).

```js
class Foo extends React.Component {

    handleChange(e){
        console.log('parent', e);
    }

    render() {

        return (
            <Bar onChange={this.handleChange}/>
        )
    }
}

class Bar extends React.Component {

    render() {

        return (
            <p>
                <button onClick={() => this.props.onChange(1)}>Lifting state up</button>
            </p>
        )
    }
}
```

## Exemple d'utilisation Form

Pour la gestion des formulaires on utilise souvent cette technique pour configurer les champs d'un formulaire. Voyez l'exemple qui suit :

1. Form est la classe mère qui utilise Input un composant enfant. Ce composant fera remonter son état au parent (lifting state up).

```js
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', email : '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const { username, email } = this.state; 

        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                />
                <Input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Add" />
            </form>
        );
    }
}
```

2. L'enfant Input pourra par exemple être utiliser pour styliser ce champ dans un projet.

```js
class Input extends React.Component{

    render(){

        return(
            <div style={{margin: "10px"}}>
                <input { ...this.props } />
            </div>
        )
    }
}
```

Une autre manière fonctionnelle que nous allons bientôt voir est la suivante, elle est équivalente à la classe précédente définissant Input. Attention, le return est implicite avec les parenthèses.

```js
const Input = (props) => (
    <div style={{margin: "10px"}}>
        <input { ...props } />
    </div>
)
```