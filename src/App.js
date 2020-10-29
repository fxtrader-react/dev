import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext";
import { GlobalProvider } from "../src/contexts/GlobalContext";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/Main";
import Signup from "./components/layout/section/Signup";
import Login from "./components/layout/section/Login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalProvider>
          <div className="App">
            <Switch>
              <PrivateRoute exact path="/" component={Main} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
        </GlobalProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
