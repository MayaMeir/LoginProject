import "./App.css";
import Form from "./form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Info from "./info/Info.js";
import React, { useState } from "react";
import { DataContext } from "./context/ContextWrapper";
function App() {

  const [value, setValue] = useState('context value');

  return (
    <div className="App">
      <DataContext.Provider value={{value, setValue}}>
      <Router>
        <Switch>
             <Route exact path="/" component={Form} />
            <Route exact path="/info" component={Info} />
        </Switch>
      </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
