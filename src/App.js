import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProfilePage from './pages/HomePage/Profile/ProfilePage';
import MovieDetail from './pages/HomePage/MovieDetail/MovieDetail';
function App() {
  return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/moviedetail" component={MovieDetail}/>
        <Route path="" component={PageNotFound}/>
      </Switch>
  );
}

export default App;
