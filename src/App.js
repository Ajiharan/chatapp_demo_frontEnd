import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
