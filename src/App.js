import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact children={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;