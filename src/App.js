import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext";
import { GlobalProvider } from "../src/contexts/GlobalContext";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/Main";
import Signup from "./components/layout/section/Signup";
// import Section from "./components/layout/Section";
import Login from "./components/layout/section/Login";
import Landing from "./components/pages/Landing";
import NotFound404 from "./components/pages/NotFound404";

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalProvider>
          <Switch>
            <PrivateRoute
              exact
              path="/page-not-found"
              component={NotFound404}
            />
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/:id" component={Main} />
            <Route path="*" exact={true} component={NotFound404} />
          </Switch>
        </GlobalProvider>
      </AuthProvider>
    </Router>
  );
}

{
  /* <Route path="/abc" render={()=><TestWidget num="2" someProp={100}/>}/>

<Route path='/mybooks' render={routeProps => <Books {...routeProps} booksGetter={getMyBooks}/>} />

<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <PropsRoute path='/allbooks' component={Books} booksGetter={getAllBooks} />
    <PrivateRoute path='/mybooks' component={Books} redirectTo="/" booksGetter={getMyBooks} />
    <PrivateRoute path='/trades' component={Trades} redirectTo="/" user={user} />
  </Switch>
</Router> */
}

export default App;
