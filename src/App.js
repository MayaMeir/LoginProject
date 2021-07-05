import './App.css';
import Form from './form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Info from './info/Info.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/info" component={Info} />
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;
