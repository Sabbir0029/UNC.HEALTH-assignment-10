import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PricateRoute from './components/PricateRoute/PricateRoute';
import Services from './components/Services/Services';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Footer from './sharing/Footer/Footer';
import Header from './sharing/Header/Header';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/Home'>
          <Home></Home>
        </Route>
        <PricateRoute path='/Services'>
          <Services></Services>
        </PricateRoute>
        <Route path='/blog'>
          <Blog></Blog>
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
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
