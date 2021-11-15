import React from "react";
import Star from "../Styles/Star";

const { NUMBER_STARS: number_stars, TIME_STAR: time_star } = process.env;

console.log(number_stars, time_star)

// On définit un composant de style, il faut écrire les CSS dans les cotes couchés
// on peut utiliser des scss

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.interval = null;
  }

  draw() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, time_star);
  }

  componentDidMount() {
    this.draw();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === number_stars) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        {[...Array(count).keys()].map((_, i) => (
          <Star key={i} />
        ))}
      </div>
    );
  }
}

export default Stars;
