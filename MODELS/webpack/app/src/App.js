import React from "react";

class App extends React.Component{
    constructor(props){
      super(props);

      // on précise le contexte que l'on passe à la fonction lorsque celle-ci sera exécutée dans le DOM un autre contexte, this ici sera le contexte de la classe
      this.click = this.click.bind(this);
    }
  
    click(){
        // ICI React perd le contexte de son this
    console.log(this.props);
    // le this ici sera undefined car la librairie est en mode strict use strict
      console.log(this);
    }
  
    render(){

    // Cette partie là est monté dans le DOM donc le contexte de this change lors de l'appel de la fonction click
      return (
        <button name="Hello React" onClick={this.click}>Clike Me !</button>
      )
    }
  }
  


export default App;