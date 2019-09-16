import React from 'react';
import { Route, Switch,  } from 'react-router-dom';
import Home from "./components/Home";
import Game from "./components/Game";
import NoMatch from "./components/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <>
  <Nav />
    <Switch>
      <Route exact path= "/" component={Home} />
      <Route exact path="/game"  component={Game} />
      <Route component={NoMatch}/>
    </Switch>
  </>
);

export default App;
