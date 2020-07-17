import React, { useEffect } from "react";
import "./App.less";

import { LectureLayout } from "./components/layouts";
import { Link, Redirect } from "react-router-dom";
import { RenderRoutes, PUBLIC_ROUTES, PRIVATE_ROUTES } from "./routes";
import { GET_AUTH_USER } from "./graphql/user";
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/reducers/users";
import { useQuery } from "@apollo/react-hooks";

function App() {
  const { loading, subscribeToMore, data, refetch } = useQuery(GET_AUTH_USER);
  const dispatch = useDispatch();

  console.log("rerender appp");
  useEffect(() => {
    if (data?.getAuthUser) {
      dispatch(updateUser(data.getAuthUser));
    }
  }, [data]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      {data?.getAuthUser ? (
        <>
          <RenderRoutes routes={PRIVATE_ROUTES} refetch={refetch} />
        </>
      ) : (
        <>
          <RenderRoutes routes={PUBLIC_ROUTES} refetch={refetch} />
          {/* <Redirect to={"/"} /> */}
        </>
      )}
    </div>
  );
}
export default App;

/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
function displayRouteMenu(routes) {
  /**
   * Render a single route as a list item link to the config's pathname
   */
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key} ({route.path})
        </Link>
      </li>
    );
  }

  // loop through the array of routes and generate an unordered list
  return (
    <ul>
      {routes.map((route) => {
        // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}
            </React.Fragment>
          );
        }

        // no nested routes, so just render a single route
        return singleRoute(route);
      })}
    </ul>
  );
}
