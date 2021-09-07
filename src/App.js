import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import AllNews from "./components/AllNews/AllNews";
import Category from "./components/Category/Category";
import Home from "./components/Home/Home";
import { AuthProvider, PrivateRoute } from "./lib/auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category" component={Category} />
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/news/:id" component={AllNews} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
