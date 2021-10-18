import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Header from './sharing/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/Home'>
          <Home></Home>
        </Route>
        <Route path='/Services'>
          <Services></Services>
        </Route>
        <Route path='/Login'>
          <Signin></Signin>
        </Route>
        <Route path='/Signup'>
          <Signup></Signup>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
