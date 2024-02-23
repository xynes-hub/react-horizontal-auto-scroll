import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  Scroller  from '../.';

const App = () => {
  return (
    <div>
      <Scroller><h1>he3loooo</h1></Scroller>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
