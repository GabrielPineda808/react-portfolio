import './App.css';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
