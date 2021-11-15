import { Component } from "react";

import BaseNumberInput from "./components/BaseNumberInput";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      binary: "",
      decimal: "",
      number: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(n, b) {
    if (
      n !== "" &&
      (parseInt(n, 10).toString(2) === "NaN" ||
        parseInt(n, 2).toString(10) === "NaN")
    ) {
      this.setState({
        message: "Attention vérifiez le type de vos données",
      });

      return;
    }

    if (b === "decimal")
      this.setState({
        binary: n === "" ? "" : parseInt(n, 10).toString(2),
        decimal: n,
        message :''
      });

    if (b === "binary")
      this.setState({
        binary: n,
        decimal: n === "" ? "" : parseInt(n, 2).toString(10),
        message :''
      });
  }

  render() {
    const { binary, decimal, message } = this.state;

    return (
      <>
        { message && <p>{message}</p>}
        <BaseNumberInput
          onChangeBase={this.handleChange}
          base="decimal"
          number={decimal}
        />
        <BaseNumberInput
          onChangeBase={this.handleChange}
          base="binary"
          number={binary}
        />
      </>
    );
  }
}

export default App;
