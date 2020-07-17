import React from "react";
import { Route, Switch } from "react-router-dom";
import { SignIn, SignUp } from "./components/landing";
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
              <route.component {...props} routes={route.routes} refetch={route.refetch} />
            </route.layout>
          ) : (
            <route.component {...props} routes={route.routes} refetch={route.refetch} />
          )}
        </>
      )}
    />
  );
}

const PRIVATE_ROUTES = [
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
        component: Lecture.TestBank,
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
      {
        path: "/lecture/question/:id",
        key: "QUESTION",
        exact: true,
        component: Lecture.Question,
      },
    ],
  },
];

const PUBLIC_ROUTES = [
  { path: "/signin", key: "ROOT", exact: true, component: SignIn },
  { path: "/signup", key: "ROOT", exact: true, component: SignUp },
  { path: "/", key: "ROOT", exact: true, component: SignIn },
];

function RenderRoutes({ routes, refetch }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} refetch={refetch}/>;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

export { PRIVATE_ROUTES, PUBLIC_ROUTES, RenderRoutes };
