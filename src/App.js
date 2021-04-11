import './App.css';

import Main from './views/Main'


import { Router,Redirect } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from="/PORTFOLIO" to="/main" noThrow />
        <Main path = "/main" />

      </Router>
    </div>
  );
}

export default App;
