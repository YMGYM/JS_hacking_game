import {React} from 'react';
import {withRouter, Route} from 'react-router-dom';
import GamePage from './components/GamePage';
import MainPage from './components/MainPage';

function App() {
  return (
   <div>
      <Route exact path='/' component={MainPage} />

      <Route path='/game' component={GamePage} />
     
   </div>
  );  
}

export default withRouter(App);
