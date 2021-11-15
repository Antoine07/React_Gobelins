import './App.css';
import Dragon from './components/Dragon';
import Form from './components/Form';
import { Column, Row, Container } from './Styles/Grid';
import Nav from './Styles/Nav';

import { useSelector, useDispatch } from 'react-redux';
import GlobalStyle from './Styles/Global';
import Button from './Styles/Button';
import { reverseDragon } from './actions/actions-types';

const App = () => {

  const { count, message } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <GlobalStyle />
      {message && (
        <Row>
          <Column number={1}>
            <p>{message}</p>
          </Column>
        </Row>
      )}
      <Row>
        <Column number={1}>
          <Nav>
            Number of Dragon(s) : { count }
          </Nav>
        </Column>
      </Row>
      <Row>
        <Column number={3}>
          <Form />
          <Button onClick={() => dispatch(reverseDragon())}>Reverse</Button>
        </Column>
        <Column number={1}>
          <Dragon />
        </Column>
      </Row>
    </Container>
  );
}

export default App;
