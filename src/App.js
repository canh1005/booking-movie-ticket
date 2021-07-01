import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import LoginPage from './pages/LoginPage/LoginPage';
function App() {
  return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="" component={PageNotFound}/>
      </Switch>
  );
}

export default App;
