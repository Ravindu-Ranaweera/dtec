import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ViewCourse from "../components/page/course/ViewCourse";

const CourseRoute = () => {
  // path equals to /dashboard in here
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact>
        {/* <Dashboard /> */}
      </Route>

      <Route path={`${path}/course/courseTypes`} exact>
      <ViewCourse />
      </Route>
     
    </Switch>
  );
};

export default CourseRoute;
