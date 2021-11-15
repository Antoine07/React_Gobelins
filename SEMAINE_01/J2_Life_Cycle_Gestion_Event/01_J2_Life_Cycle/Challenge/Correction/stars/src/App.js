import React from "react";
import Stars from "./components/Stars";
import GlobalStyle from "./Styles/Global";
import Container from "./Styles/Container";

const { MAX_LINES : max_lines, TIME: time } = process.env;

console.log(process.env);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: 1,
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        lines: this.state.lines + 1,
      });
    }, time);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.lines === max_lines) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { lines } = this.state;
    // Array(lines).keys() est un constructeur de classe un itérable
    // pour afficher les valeurs de l'itérable il faut itérer dessus
    // le fait d'utiliser le spread opertor permet d'itérer sur le constructeur
    // Attention au global style de styled components il faut le mettre au début
    // sur le composant racine, voir l'exemple ci-dessous
    return (
      <>
        <GlobalStyle />
        <Container>
          {[...Array(lines).keys()].map((num, i) => (
            <Stars num={num + 1} key={i}/>
          ))}
        </Container>
      </>
    );
  }
}

export default App;
