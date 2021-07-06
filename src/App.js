import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Info from "./pages/infoPage/InfoPage.js";
import React, { useState } from "react";
import { AuthContext } from "./context/AuthContext";
import LoginPage from "./pages/loginPage/LoginPage";
function App() {

  const [value, setValue] = useState(null);

  return (
    <div className="App">
      <AuthContext.Provider value={{value, setValue}}>
      <Router>
        <Switch>
             <Route exact path="/" component={LoginPage} />
            <Route exact path="/info" component={Info} />
        </Switch>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
