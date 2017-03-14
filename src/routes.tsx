import * as React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import {unreachable} from './utils';

export type Route = 'PageOne' | 'PageTwo';
export type Routes = {
  PageOne: Route,
  PageTwo: Route,
};

export const Routes: Routes = {
  PageOne: 'PageOne',
  PageTwo: 'PageTwo',
};

export const routeNames: Array<Route> = [Routes.PageOne, Routes.PageTwo];

function createRoutes(): JSX.Element {
  return (
    <Scene key="root">
      {routeNames.map((name: Route): JSX.Element =>
        <Scene key={name} component={getPage(name)} hideNavBar />,
      )}
    </Scene>
  );
}

function getPage(name: Route): React.ComponentClass<any> {
  switch (name) {
    case 'PageOne': return PageOne;
    case 'PageTwo': return PageTwo;
    default: return unreachable(name);
  }
}

export default <Router scenes={Actions.create(createRoutes())} />;
