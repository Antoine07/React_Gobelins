import Dragons from "./components/Dragons";
import Col from "./Styles/Col";
import Container from "./Styles/Container";
import GlobalStyle from "./Styles/Global";



const App = ()  =>{
  return (
    <Container>
      <GlobalStyle />
      <Col>
      FORM
      </Col>
      <Col>
      <Dragons />
      </Col>
    </Container>
  );
}

export default App;
