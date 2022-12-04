import './App.css';
import styled from 'styled-components';
import { ColorSuccess } from './js/variables'

const Heading = styled.h1`
  color: ${ColorSuccess};
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> hello, this is header1</h1>
        <Heading>hello, i am success</Heading>
        <h2>this is header2</h2>
        <h2> </h2>
      </header>
    </div>
  );
}

export default App;
