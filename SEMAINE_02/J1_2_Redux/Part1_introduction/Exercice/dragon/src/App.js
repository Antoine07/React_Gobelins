import Dragons from "./components/Dragons";
import Form from "./components/Form";
import Col from "./Styles/Col";
import Container from "./Styles/Container";
import GlobalStyle from "./Styles/Global";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Col>
        <Form />
      </Col>
      <Col>
        <Dragons />
      </Col>
    </Container>
  );
};

export default App;
