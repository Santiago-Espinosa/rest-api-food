import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./components/Home/Home.jsx";
import Main from "./components/Main/Main.jsx";
import { getRecipesBackend } from "./redux/actions.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesBackend());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>

        <Route
          path="/recipes"
          render={({ history, location }) => (
            <Main history={history} location={location} />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
