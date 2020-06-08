import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./components/landing";
import Lecture from "./components/lecture";
import { LectureLayout } from "./components/layouts";

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        <>
          {!!route.layout ? (
            <route.layout>
              <route.component {...props} routes={route.routes} />
            </route.layout>
          ) : (
            <route.component {...props} routes={route.routes} />
          )}
        </>
      )}
    />
  );
}

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Landing },
  {
    path: "/lecture",
    key: "LECTURE",
    component: RenderRoutes,
    layout: LectureLayout,
    routes: [
      {
        path: "/lecture",
        key: "LECTURE_ROOT",
        exact: true,
        component: Lecture.TestBank
      },
      {
        path: "/lecture/contest",
        key: "LECTURE_CONTEST",
        exact: true,
        component: () => <div> div2 </div>,
      },
      {
        path: "/lecture/student",
        key: "LECTURE_STUDENT",
        exact: true,
        component: () => <h1>App Page</h1>,
      },
    ],
  },
];

export default ROUTES;

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
