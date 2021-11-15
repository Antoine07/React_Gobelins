import { Component } from "react";

class BaseNumberInput extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
      // On peut renommer des constantes utiles lorsqu'on a à définir plusieurs constantes de même nom dans le même scope
      const { value:n, name:b } = e.target;

      this.props.onChangeBase(n, b);
  }

  render(){
    const { base, number } = this.props;

    return(
        <div>
            <label htmlFor="base">Base : {base}</label>
            <input type="text" name={base} value={number} onChange={this.handleChange} />
        </div>
    );
  }

}

export default BaseNumberInput;
