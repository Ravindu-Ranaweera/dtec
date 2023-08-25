import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import Routes from "./routes";
import CoreRoutes from "./routes/CourseRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Routes>
            <CoreRoutes />
          </Routes>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
