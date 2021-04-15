import './App.css';

import Main from './views/Main'


import { Router,Redirect } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from="/main" to="/PORTFOLIO" noThrow />
        <Main path = "/PORTFOLIO" />

      </Router>
    </div>
  );
}

export default App;
