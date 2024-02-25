import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import { GenRowCol } from './GenCol';

const App = () => {
  return (
    <div>
      <h1>Heyy</h1>
      <GenRowCol num={3} bg="orange" />
      <GenRowCol num={3} bg="green" />
      <GenRowCol num={11} />
      <GenRowCol num={2} bg="teal" />
      <GenRowCol num={7} bg="pink" />
      <GenRowCol num={3} bg="violet" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
