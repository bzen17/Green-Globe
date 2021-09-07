import React, {useState, useEffect} from 'react';
import Routes from './config/routes';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';


const AppWithRouterAccess = props => {
    const RouteWithSubRoutes = route => {
        const {path, exact, component, secure, routes} = route;
        const location = useLocation();
        const currentPath = location.pathname;
        if (secure) {
            return ( <Route path={path} exact={exact} component={component}/> );
        } else {
          return (
            <Route
              path={path}
              exact={exact}
              component={component}
              routes={routes}
              //  Issuer={Issuer}
            />
          );
        }
      };
    return (

            <Switch>
              {Routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Route path="*"></Route>
            </Switch>
      );
}

export default AppWithRouterAccess;