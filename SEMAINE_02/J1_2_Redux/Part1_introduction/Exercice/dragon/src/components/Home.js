import Dragons from "./Dragons";
import Form from "./Form";
import Col from "../Styles/Col";
import Container from "../Styles/Container";

const Home = () => {
  return (
    <Container>
      <Col>
        <Form />
      </Col>
      <Col>
        <Dragons />
      </Col>
    </Container>
  );
};

export default Home;
